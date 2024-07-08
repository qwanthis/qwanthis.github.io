document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');

    const firstButton = document.getElementById('firstButton');
    firstButton.addEventListener('click', () => {
        content.innerHTML = `
            <h1>Are you sure? Robots never lie...</h1>
            <button id="secondButton">Yes</button>
        `;

        const secondButton = document.getElementById('secondButton');
        secondButton.addEventListener('click', () => {
            content.innerHTML = `
                <h1>I don't believe you. You're a robot!</h1>
                <button id="thirdButton">I'm not a robot, trust me</button>
            `;

            const thirdButton = document.getElementById('thirdButton');
            thirdButton.addEventListener('click', () => {
                content.innerHTML = `
                    <h1>Prove it! Only humans can click this button...</h1>
                    <button id="fourthButton">Click me!</button>
                `;

                const fourthButton = document.getElementById('fourthButton');
                fourthButton.addEventListener('click', () => {
                    content.innerHTML = `
                        <h1>Okay, let's see if you're not not a robot.</h1>
                        <button id="fifthButton">I'm not not a robot</button>
                    `;

                    const fifthButton = document.getElementById('fifthButton');
                    fifthButton.addEventListener('click', () => {
                        fetch('https://api.ipify.org?format=json')
                            .then(response => response.json())
                            .then(data => {
                                const userAgent = navigator.userAgent;
                                const language = navigator.language;
                                const platform = navigator.platform;

                                // Определение типа устройства
                                const isMobile = /Mobi|Android/i.test(userAgent);
                                const deviceType = isMobile ? 'Mobile' : 'Desktop';

                                console.log(`User's IP: ${data.ip}`);
                                console.log(`User-Agent: ${userAgent}`);
                                console.log(`Language: ${language}`);
                                console.log(`Platform: ${platform}`);
                                console.log(`Device Type: ${deviceType}`);

                                content.innerHTML = `
                                    <h1>Gotyou!</h1>
                                    <p>Your IP address: ${data.ip}</p>
                                    <p>Your User-Agent: ${userAgent}</p>
                                    <p>Your Language: ${language}</p>
                                    <p>Your Platform: ${platform}</p>
                                    <p>Your Device Type: ${deviceType}</p>
                                    <p>Feeling exposed? Maybe you should think twice before clicking random links...</p>
                                `;
                            });
                    });
                });
            });
        });
    });
});
