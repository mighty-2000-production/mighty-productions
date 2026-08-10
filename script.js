function readExcerpt() {
    const excerpt = `
        <div class="excerpt-box">
            <h2>Defiant Hearts</h2>
            <p class="author">By Nosretep</p>

            <h3>Chapter One</h3>

            <p>
                Some hearts are not meant to live quietly. They are born
                carrying dreams, wounds and battles that nobody else can see.
                And sometimes, the person we least expect becomes the one who
                changes everything.
            </p>

            <p>
                She had promised herself that she would never fall in love
                again. Love had already taught her lessons she never wanted
                to learn, and she had built walls around her heart so high
                that she believed nobody could ever climb them.
            </p>

            <p>
                Then he appeared.
            </p>

            <p>
                He was a stranger at first, just another face in a world
                filled with millions of people. But there was something
                different about him. Something in the way he looked at her
                made her wonder whether some meetings were never accidents.
            </p>

            <p>
                Their story was never going to be easy. There would be
                secrets, misunderstandings, heartbreak and choices that
                would test everything they believed about love.
            </p>

            <p>
                But sometimes two hearts can choose to fight, even when the
                whole world tells them to give up.
            </p>

            <p class="end-excerpt">
                <em>To be continued...</em>
            </p>

            <button onclick="closeExcerpt()">Close Excerpt</button>
        </div>
    `;

    const overlay = document.createElement("div");
    overlay.id = "excerpt-overlay";
    overlay.innerHTML = excerpt;

    document.body.appendChild(overlay);
}


function closeExcerpt() {
    const overlay = document.getElementById("excerpt-overlay");

    if (overlay) {
        overlay.remove();
    }
}
