function editElement(element, match, replacer) {
    // TODO
    const text = element.textContent;
    // za da e za vsichki suvpadeniya s regex
    const pattern = new RegExp(match, 'g'); 
    // konstruktora priema 2 parametura - 1 e pattern-a kato ot regex101, 2 sa flagovete kato string
    // moje i sus split i join
    const result = text.replace(pattern, replacer);
    element.textContent = result;
}