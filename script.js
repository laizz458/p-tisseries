function showRecipe(type) {
    const content = document.getElementById("recipeContent");

    if (type === "brownie") {
        content.innerHTML = `
        <h3>🍫 Brownies</h3>
        <ol>
            <li>Préchauffe le four à 180°C.</li>
            <li>Fais fondre le chocolat avec le beurre.</li>
            <li>Ajoute le sucre et les œufs.</li>
            <li>Ajoute la farine et mélange.</li>
            <li>Verse dans un moule.</li>
            <li>Fais cuire 20 minutes.</li>
        </ol>`;
    }

    if (type === "crepes") {
        content.innerHTML = `
        <h3>🥞 Crêpes</h3>
        <ol>
            <li>Mélange farine, œufs et sucre.</li>
            <li>Ajoute le lait petit à petit.</li>
            <li>Mélange jusqu'à pâte lisse.</li>
            <li>Verse une louche dans la poêle chaude.</li>
            <li>Fais cuire 1 minute de chaque côté.</li>
        </ol>`;
    }

    if (type === "gateau") {
        content.innerHTML = `
        <h3>🎂 Gâteau au chocolat</h3>
        <ol>
            <li>Préchauffe le four à 180°C.</li>
            <li>Fais fondre chocolat et beurre.</li>
            <li>Ajoute sucre et œufs.</li>
            <li>Ajoute farine et mélange.</li>
            <li>Verse dans un moule.</li>
            <li>Fais cuire 30 minutes.</li>
        </ol>`;
    }
}
