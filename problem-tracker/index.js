/* Reset some default browser styles */
body, h1, h2, ul, p {
    margin: 0;
    padding: 0;
}

/* Set a dark background color and light text color for the body */
body {
    background-color: #333;
    font-family: Arial, sans-serif;
    color: #fff;
    margin: 0;
    padding: 0;
}

/* Style the header with a darker background color and centered text */
h1 {
    background-color: #222;
    color: #fff;
    text-align: center;
    padding: 20px 0;
    margin-bottom: 20px;
}

/* Center the content on the page */
.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #444;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

/* Style input fields and textareas with a dark background */
input[type="text"],
textarea {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 15px;
    background-color: #555;
    border: 1px solid #444;
    border-radius: 3px;
    color: #fff;
}

/* Style buttons with a dark background and light text */
button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background-color: #0056b3;
}

/* Style the problem list with a dark background */
#problemList {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

#problemList li {
    background-color: #555;
    border: 1px solid #444;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    color: #fff;
}

/* Style the mod pack version display with a dark background */
#modPackVersion {
    font-weight: bold;
    color: #007bff;
}
