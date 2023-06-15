// ==UserScript==
// @name         My App Login Script
// @namespace    http://dummy-namespace.example/
// @version      1.0
// @description  Enable login button after checking all checkboxes
// @match        http://dummy-app-url.example/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Disable the login button initially
    document.querySelector('button[type="submit"]').disabled = true;

    // Create the checklist button
    const checklistButton = document.createElement('button');
    checklistButton.innerHTML = 'Checklist';
    checklistButton.className = 'btn btn-primary mt-3';
    checklistButton.onclick = openPopup;

    // Inject the checklist button before the login button
    const loginButton = document.querySelector('button[type="submit"]');
    loginButton.parentNode.insertBefore(checklistButton, loginButton);

    function openPopup() {
        Swal.fire({
            title: 'Terms and Conditions',
            html: `
                <div>
                    <input type="checkbox" id="checkbox1" onclick="checkAllCheckboxes()"> Cook<br>
                    <input type="checkbox" id="checkbox2" onclick="checkAllCheckboxes()"> Eat<br>
                    <input type="checkbox" id="checkbox3" onclick="checkAllCheckboxes()"> Sleep<br>
                </div>
            `,
            showCancelButton: true,
            confirmButtonText: 'Accept',
            cancelButtonText: 'Cancel',
            preConfirm: () => {
                if (!document.getElementById('checkbox1').checked || !document.getElementById('checkbox2').checked || !document.getElementById('checkbox3').checked) {
                    Swal.showValidationMessage('Please check all the checkboxes');
                    return false;
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                enableLoginButton();
            }
        });
    }

    function checkAllCheckboxes() {
        const checkbox1 = document.getElementById('checkbox1');
        const checkbox2 = document.getElementById('checkbox2');
        const checkbox3 = document.getElementById('checkbox3');

        if (checkbox1.checked && checkbox2.checked && checkbox3.checked) {
            enableLoginButton();
        } else {
            disableLoginButton();
        }
    }

    function enableLoginButton() {
        document.querySelector('button[type="submit"]').disabled = false;
    }

    function disableLoginButton() {
        document.querySelector('button[type="submit"]').disabled = true;
    }
})();
