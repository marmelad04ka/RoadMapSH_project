export async function searchRepos(language, updateInfoContainer, updateButton, updateContentContainer) {
    let onUpdateInfoContainer = updateInfoContainer;
    let onUpdateButton = updateButton;
    let data = null;
    
    try {
        onUpdateInfoContainer({startSearch: true});
        updateContentContainer({hide:true});
        updateButton({hide_button:true});

        const randomStars = getRandomInt(0, 10000);
        const query = encodeURIComponent(`language:${language} stars:>${randomStars}`);
        const per_page = 1;
        const randomPage = getRandomInt(1, Math.ceil(500 / per_page));
        
        const url = `https://api.github.com/search/repositories?q=${query}&per_page=${per_page}&page=${randomPage}`;

        const response = await fetch(url, {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'X-GitHub-Api-Version': '2026-03-10'
            }
        });
        
        /*if (!response.ok) {
            onUpdateInfoContainer({error_state:true});
            throw new Error(`${response.status}`);
        }*/
        
        data = await response.json();

        if (data.items.length === 0) {
            onUpdateInfoContainer({error_state:true});
            updateButton({error_state:true});       
            return;
        }
        
    } catch (error) {
        onUpdateInfoContainer({error_state:true});
        updateButton({error_state:true});
        updateButton({show_button:true});
        return;
    }
    
    updateContentContainer({show:true, data:data, language:language})
    onUpdateInfoContainer({endSearch:true});
    onUpdateButton({show_button:true})
    onUpdateButton({refresh_button:true})
    
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}