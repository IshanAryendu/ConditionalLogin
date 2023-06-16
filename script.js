// ==UserScript==
// @name         Disable Login Button
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://127.0.0.1:5500/website/index.html
// @icon         https://www.google.com/s2/favicons?sz=64&domain=0.1
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Create the checklist items
    let items = ['cook', 'eat', 'sleep'];

    // Create the checklist button
    let checklistButton = document.createElement('button');
    checklistButton.textContent = 'Checklist';
    checklistButton.className = 'w-100 btn btn-lg btn-primary mt-3';
    checklistButton.style.marginRight = '10px';

    // Insert the checklist button to the left of the login button
    let loginButton = document.querySelector('button[type="submit"]');
    loginButton.parentNode.insertBefore(checklistButton, loginButton);

    // Disable the login button
    loginButton.disabled = true;

    // Create the popup window
    let popup = null;

    // Add an event listener to the checklist button
    checklistButton.addEventListener('click', () => {
        // Open the popup window
        popup = window.open('', 'Popup Checklist', 'width=200,height=200');

        // Add the checklist to the popup window
        let list = popup.document.createElement('ul');
        for (let item of items) {
            let listItem = popup.document.createElement('li');
            let checkbox = popup.document.createElement('input');
            checkbox.type = 'checkbox';
            listItem.appendChild(checkbox);
            listItem.appendChild(popup.document.createTextNode(item));
            list.appendChild(listItem);
        }
        popup.document.body.appendChild(list);

        // Create the accept and decline buttons
        let acceptButton = popup.document.createElement('button');
        acceptButton.textContent = 'Accept';
        acceptButton.disabled = true;
        let declineButton = popup.document.createElement('button');
        declineButton.textContent = 'Decline';

        // Add an event listener to the accept button
        acceptButton.addEventListener('click', () => {
            loginButton.disabled = false;
            popup.close();
        });

        // Add an event listener to the decline button
        declineButton.addEventListener('click', () => {
            loginButton.disabled = true;
            popup.close();
        });

        // Add an event listener to the checkboxes
        let checkboxes = popup.document.querySelectorAll('input[type="checkbox"]');
        for (let checkbox of checkboxes) {
            checkbox.addEventListener('change', () => {
                let allChecked = true;
                for (let checkbox of checkboxes) {
                    if (!checkbox.checked) {
                        allChecked = false;
                        break;
                    }
                }
                acceptButton.disabled = !allChecked;
            });
        }

        // Add the accept and decline buttons to the popup window
        popup.document.body.appendChild(acceptButton);
        popup.document.body.appendChild(declineButton);
    });
})();
