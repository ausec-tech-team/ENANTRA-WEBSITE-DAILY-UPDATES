# ENANTRA-WEBSITE-DAILY-UPDATES
This is the template and source code for the official website for Enantra, an annual event conducted by Anna University's Student Entrepreneurship Club. Daily updates and pull requests are to be made here.875509
Any changes that are to be made to the official website will first appear here.
the ENANTRA LOGO ANIMATION- RAKSHITHA T 23:55 20/9/23
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap" rel="stylesheet">
    <title>Hover with Spiral Animation</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            overflow: hidden;
            font-family: 'Black Ops One', cursive;
            
        }

        .hexagon-container {
            width: 200px;
            height: 230px;
            position: relative;
            overflow: hidden;
            transition: transform 0.3s ease-in-out;
        }

        .hexagon {
            width: 100%;
            padding-bottom: 115%;
            position: absolute;
            background: linear-gradient(to bottom,
                rgba(237, 100, 72, 0.7), 
                rgba(204, 31, 53, 0.7)
                );
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            transition: transform 0.3s ease-in-out;
        }

        .hexagon-content {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            font-size: 18px;
        }
        
        .spiral-letter {
            position: absolute;
            transform: translate(0, 0) scale(1);
            transition: transform 1s cubic-bezier(0.4, 2.1, 0.7, 1);
        }
    </style>
</head>
<body>
    <div class="hexagon-container">
        <div class="hexagon">
            <div class="hexagon-content">
                <span id="letter1" class="spiral-letter">E</span>
                <span id="letter2" class="spiral-letter">N</span>
                <span id="letter3" class="spiral-letter">A</span>
                <span id="letter4" class="spiral-letter">N</span>
                <span id="letter5" class="spiral-letter">T</span>
                <span id="letter6" class="spiral-letter">R</span>
                <span id="letter7" class="spiral-letter">A</span>
            </div>
        </div>
    </div>
    <script>
        const letters = document.querySelectorAll('.spiral-letter');
        const hexagon = document.querySelector('.hexagon-container');
        
        const radius = 60;
        const angleIncrement = (2 * Math.PI) / letters.length;
        let angle = 0;
        
        letters.forEach((letter, index) => {
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            
            letter.style.transform = `translate(${x}px, ${y}px) scale(0.5)`;
            letter.style.transition = `transform 1s cubic-bezier(0.4, 2.1, 0.7, 1) ${index * 0.2}s`;
            
            angle += angleIncrement;
        });
        
        hexagon.addEventListener('mouseenter', () => {
            letters.forEach((letter, index) => {
                setTimeout(() => {
                    letter.style.transform = 'translate(0, 0) scale(1)';
                }, index * 200);
            });
            hexagon.style.transform = 'scale(1.2)'; // Enlarge the hexagon on hover
        });

        hexagon.addEventListener('mouseleave', () => {
            letters.forEach((letter, index) => {
                letter.style.transform = `translate(${radius * Math.cos(index * angleIncrement)}px, ${radius * Math.sin(index * angleIncrement)}px) scale(0.5)`;
            });
            hexagon.style.transform = 'scale(1)'; // Restore hexagon size on mouse leave
        });
    </script>
</body>
</html>
