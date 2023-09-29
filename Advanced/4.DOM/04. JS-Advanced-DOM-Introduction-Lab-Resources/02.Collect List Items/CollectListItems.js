function extractText() {
    const items = Array.from(document.querySelectorAll('li')); 
    // pravim go na masiv, za da izvurshim edna i sushta operatsiya vyrhu vsichki elementi
    const result = items.map(e => e.textContent).join('\n'); 
    // nov masiv s text content-a na elementite

    document.getElementById('result').value = result; // dinamichno shte se obnovyava

}