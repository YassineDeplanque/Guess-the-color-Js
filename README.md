# Color Guessing Game 🎨

A fun and simple color guessing game built with **Vanilla JavaScript**. Test your color recognition skills: identify the correct RGB color from three choices. Immediate feedback is provided, and you can play again as many times as you like!

---

## ✨ Features

- **Random Color Generation:** Every round presents a new RGB color to guess.
- **Three Choices:** Each round offers three buttons—one correct and two random colors.
- **Instant Feedback:**  
  - "Yes, you are right!" (in green) for a correct guess, with a "Next" button to play again.
  - "Wrong, try again!" (in red) if you guess incorrectly.
- **No Dependencies:** Pure JavaScript, easy to integrate or extend.

---

## 🛠 Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**

---

## 📝 Usage

1. **Add the JavaScript to your HTML file:**
   - Make sure your HTML includes three buttons with IDs `1`, `2`, and `3`, and two paragraphs with IDs `firstP` and `secondP`.
   - Example HTML:
     ```html
     <p id="firstP"></p>
     <p id="secondP"></p>
     <button id="1"></button>
     <button id="2"></button>
     <button id="3"></button>
     <script src="color-game.js"></script>
     ```

2. **Open your HTML file in a browser.**

3. **How to play:**
   - The RGB color code will be displayed.
   - Click the button you think matches the displayed color.
   - Get instant feedback, and click "Next" to play again!

---

## 💡 Notes

- Each game round shuffles the buttons so the correct answer is never in the same place.
- The game logic is fully client-side—no server required.
- You can easily customize or style the game further to your liking.

---
