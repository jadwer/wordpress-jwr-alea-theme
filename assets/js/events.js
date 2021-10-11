function setEnviado(id) {

    const headers = new Headers({
        'Content-Type': 'application/json',
        'X-WP-Nonce': ajax_var.nonce
    });

    fetch(ajax_var.url, {
        method: 'POST',
        headers: headers,
        credentials: 'same-origin',
        body: JSON.stringify({ diet_id: id })
    })
        .then(response => {
            return response.ok ? response.json() : 'Not Found...';
        }).then(json_response => {
            console.log(json_response.data);
            const svg = document.getElementById(id);
            svg.removeChild(svg.children[0]);
            const newSvg = document.createElement('span');
            newSvg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>';
            svg.appendChild(newSvg);

        });
}