from flask import Flask, render_template, Response
import cv2
import random
import time
from cvzone.HandTrackingModule import HandDetector

app = Flask(__name__)

detector = HandDetector(detectionCon=0.5, maxHands=2)
cap = cv2.VideoCapture(0)
cap.set(3, 600)
cap.set(4, 400)

def generate_question():
    num1 = random.randint(0, 5)
    num2 = random.randint(0, min(num1, 5 - num1))
    operation = random.choice(['+', '-'])

    if operation == '+':
        answer = num1 + num2
    else:
        answer = num1 - num2

    question_text = f'Soru: {num1} {operation} {num2}'
    return num1, num2, answer, operation, question_text

question = generate_question()
last_answer = None
start_time = None
correct_answers = 0

def generate_frames():
    global cap, question, last_answer, start_time, correct_answers,totalFingers

    while True:
        success, img = cap.read()
        img = cv2.flip(img, 1)
        hands, img = detector.findHands(img)

        if hands:
            hand = hands[0]
            fingers = detector.fingersUp(hand)
            totalFingers = fingers.count(1)

            cv2.putText(img, question[4], (30, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2)
            cv2.putText(img, f'Parmaklar: {totalFingers}', (30, 120), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 255, 0), 2)

            if start_time is None:
                start_time = time.time()

            elapsed_time = time.time() - start_time

            if elapsed_time <= 5.0 and totalFingers == question[2] and 0 <= question[2] <= 5:
                if last_answer is not None and last_answer == totalFingers:
                    question = generate_question()
                    continue

                cv2.putText(img, 'Doğru!', (30, 190), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
                last_answer = totalFingers
                correct_answers += 1
                question = generate_question()
                start_time = None
                print(f'Cevap: {totalFingers} - Doğru! Toplam Doğru Sayısı: {correct_answers}')

            elif elapsed_time > 10.0:
                cv2.putText(img, 'Süre doldu. Tekrar deneyin', (30, 190), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)
                question = generate_question()
                start_time = None

        cv2.putText(img, f'Toplam Dogru: {correct_answers}', (420, 50), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 255, 255), 2)

        ret, jpeg = cv2.imencode('.jpg', img)
        frame = jpeg.tobytes()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/video_feed')
def video_feed():
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(debug=True)
