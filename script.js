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
    
    // Find the "Publish review" button
    let publishButton = document.querySelector('awsui-button[click="publish()"]');
    publishButton.style.visibility = 'hidden';
    
    // Create the checklist button if it doesn't already exist
    let checklistButton = document.querySelector('#checklist-button');
    if (!checklistButton) {
        checklistButton = document.createElement('button');
        checklistButton.id = 'checklist-button';
        checklistButton.textContent = 'Checklist';
        checklistButton.className = 'awsui-button awsui-button-variant-primary awsui-hover-child-icons';
        checklistButton.style.marginRight = '10px';
        checklistButton.style.marginLeft = '10px';
    
        // Insert the checklist button to the left of the merge button
        publishButton.parentNode.insertBefore(checklistButton, publishButton);
    }
    
    // Create the checklist container
    let checklistContainer = document.createElement('div');
    checklistContainer.style.display = 'none';
    checklistContainer.style.position = 'absolute';
    checklistContainer.style.top = '0';
    checklistContainer.style.right = '0';
    checklistContainer.style.width = '35%';
    checklistContainer.style.height = '100%';
    checklistContainer.style.backgroundColor = '#f2f2f2';
    checklistContainer.style.padding = '10px';
    // make the checklist container slide in and out
    checklistContainer.style.transition = 'right 5.3s ease-in-out';
    checklistContainer.style.boxShadow = '0 0 5px 0 rgba(0,0,0,0.5)';
    checklistContainer.style.zIndex = '9999';
    
    // make the checklist container a bit transparent
    checklistContainer.style.opacity = '0.97';
    
    // Add the close button to the container
    let closeButton = document.createElement('button');
    closeButton.textContent = 'X';
    // make the close button a circle
    closeButton.style.borderRadius = '50%';
    closeButton.style.width = '20px';
    closeButton.style.height = '20px';
    closeButton.style.border = 'none';
    closeButton.style.outline = 'none';
    closeButton.style.opacity = '0.97';
    closeButton.style.fontWeight = 'bold';
    closeButton.style.position = 'absolute';
    closeButton.style.backgroundColor = '#ec7211';
    closeButton.style.color = 'white';
    closeButton.style.top = '0.01';
    closeButton.style.left = '0.01';
    closeButton.title = 'Close';
    closeButton.addEventListener('click', () => {
        checklistContainer.style.display = 'none';
    });
    
    checklistContainer.appendChild(closeButton);
    
    // Add the checklist to the container
    let list = document.createElement('ul');
    for (let item of items) {
        let listItem = document.createElement('li');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        listItem.appendChild(checkbox);
        listItem.appendChild(document.createTextNode(item));
        list.appendChild(listItem);
    }
    checklistContainer.appendChild(list);
    
    // Create the accept and decline buttons
    let acceptButton = document.createElement('button');
    acceptButton.textContent = 'Accept';
    acceptButton.disabled = true;
    acceptButton.addEventListener('mouseover', () => {
        acceptButton.style.backgroundColor = '#b2f660fc';
    });
    acceptButton.addEventListener('mouseout', () => {
        acceptButton.style.backgroundColor = '#f2f2f2';
    });
    let declineButton = document.createElement('button');
    declineButton.textContent = 'Decline';
    declineButton.style.marginLeft = '10px';
    declineButton.id = 'decline-button';
    // declineButton.style.backgroundColor = 'red';
    declineButton.addEventListener('mouseover', () => {
        declineButton.style.backgroundColor = 'lightcoral';
    });
    declineButton.addEventListener('mouseout', () => {
        declineButton.style.backgroundColor = '#f2f2f2';
    });
    
    // Add an event listener to the accept button
    acceptButton.addEventListener('click', () => {
        checklistContainer.style.display = 'none';
    });
    
    // Add an event listener to the decline button
    declineButton.addEventListener('click', () => {
        publishButton.style.visibility = 'hidden';
        setTimeout(() => {
            checklistContainer.style.right = '-200px'; // Slide out
        }, 300); // Delay hiding the container by 300ms
        checklistContainer.style.display = 'none';
    });
    
    // Add an event listener to the checkboxes
    let checkboxes = checklistContainer.querySelectorAll('input[type="checkbox"]');
    for (let checkbox of checkboxes) {
        checkbox.addEventListener('change', () => {
            let allChecked = true;
            for (let checkbox of checkboxes) {
                if (!checkbox.checked) {
                    allChecked = false;
                    break;
                }
            }
            if (allChecked) {
                publishButton.style.visibility = 'visible';
            } else {
                publishButton.style.visibility = 'hidden';
            }
            acceptButton.disabled = !allChecked;
        });
    }
    
    // Add the accept and decline buttons to the container
    checklistContainer.appendChild(acceptButton);
    checklistContainer.appendChild(declineButton);
    
    // Add an event listener to the checklist button
    checklistButton.addEventListener('click', () => {
        checklistContainer.style.right = '0'; // Slide in
        checklistContainer.style.display = 'block';
    });
    
    // Add the checklist container to the document body
    document.body.appendChild(checklistContainer);
    
})();
