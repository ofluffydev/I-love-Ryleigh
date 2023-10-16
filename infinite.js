const container = document.getElementById('infinite-scroll-container');
        const textToScroll = "I love you Ryleigh!!";

        function appendText() {
            const newText = document.createTextNode(textToScroll);
            container.appendChild(newText);
            container.appendChild(document.createElement('br')); // Add a new line
        }

        // Append the initial text
        appendText();

        // Continuously append the same text with a new line to create an infinite scrolling effect
        setInterval(appendText, 10); // Adjust the interval as needed