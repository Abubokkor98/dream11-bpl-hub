# <img width="30px" src="assets/logo.png"/> BPL-DREAM 11

Welcome to **Assignment -07**. This assignment involves building a React-based application where users can select and manage cricket players for a team, following the design from Figma. You'll create a responsive UI, handle player selection, coin limitations, and complete the system following the requirements written below:

---

### Navbar

- The Navbar should match the Figma design and be responsive. ---done
- Display the user's money in the Navbar, initially it will be 0. ---done

### Banner

- Design the banner with a heading, text, background, and button as per Figma. ---done
- Everytime On clicking the button, the user's coin  will increase so that user can buy player. ---done

### Main Section Design and Toggling Feature

- Create two buttons at the top-right of the section. Available  & Selected ---done
- Selected button will show how many players are selected as in Figma , initially it will be 0. ----done
- Display Available Player section by default. done
- Display Selected Player Count in selected Player component as in figma. ----done

### Player Data

- Create a JSON file for  10-15 players, each having information like playerId, name, country, image, role, batting/bowling type, and bidding price. ---done
- You can create this JSON with AI systems such as Gemini , ChatGPT ---done

### Display Players

- Show all players in a card layout (3 columns recommended ) with the player's details ----done
- Show Players name, country, image, role, batting/bowling type, and bidding price. ---done
- Their will be a  "Choose Player" button on each card. on Clicking it following will happen. ----done

### Choose Player Functionality

- on Click "Choose Player" button ,  check if user have available coin or not. ----done
- show an alert if user don't have available coin.  ----done
- Otherwise, add the player to the selected players list. ----done

### Selected Players

- Display selected players' details in a card with one-column layout ----done
- Each card will have player image , name ,  player role, price. ----done
- a remove button for each player. ----done

### Newsletter Section ---done

- Design the newsletter section according to Figma.

### Footer

- Design the footer section following the Figma design. done

---

### Challenges

- **Use React-Toastify**: --done
  Replace all alerts in the interface with `React-Toastify` for better user notifications.

- **Implement Selected Player Remove Functionality**: ---done
  Add a "Remove" button to each selected player card. On click, the player should be removed from the selected players' section. ---done

- **Add More Player Button Functionality **: ---done
  Implement an "Add More Players" button. On click, it should display the available player section again for the user to choose from. ---done

- **Implement The Perfect Validation on Player selection**:
      - on clicking choose, player,  if player selected previously then show user an alert and terminate. ---done
      - if the selected player is already 6 then , show an alert and terminate ---done
 - **Change Your Web-Application Title**:
   change the web application title. If it show Vite-react some marks will be deducted.  ---done
  


- **Beautify GitHub Repository **: ---done
  Create an attractive `README.md` for your GitHub repository with the following:
  - Name of your project.
  - A brief description.
  - Technologies used.
  - 3 key features of your project.

---

### Optional Feature

- Implement a login experience in the newsletter section using LocalStorage.
- On subscribing, store the user's email and display a personalized message on reload if the email exists in LocalStorage.

# Designs

Page with Available Players
<img src="application-design/main.jpg"/>

<hr/>
Page with Selected Players
<img src="application-design/main-2.jpg"/>
