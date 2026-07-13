import { 
    setting_button,
    setting_list,
    language_selection_list,
    setting_language_selection,
    setting_selection,
    setting_section_button_back,
    check_mark_language_ru,
    check_mark_language_en, 
    language_ru,
    language_en,
    setting_theme_selection,
    theme_selection_list,
    light_theme,
    dark_theme,
    check_mark_light_theme,
    check_mark_dark_theme, geoName
} from "../constants/dom-elements.js";
import { changeLanguage } from '../i18n/translation.js';
import { CLASS_HIDDEN, CLASS_UNVISIBILITY } from "../../config/init-state.js";
import { changeTheme } from "../theme/change_theme.js";
import { fetchGeoLocation } from "../geoInformation.js";

export function initSetting() {
    setting_button.addEventListener('click', () => {
        setting_list.classList.toggle(CLASS_UNVISIBILITY);

        [language_selection_list, theme_selection_list].forEach(el => el.classList.add(CLASS_HIDDEN));
        setting_selection.classList.remove(CLASS_HIDDEN);
    })

    setupSettingSelection({
        button: setting_language_selection,
        settingMenu: setting_selection,
        selectionList: language_selection_list,
        storageKey: 'lang',
        checkMarks: {
            'ru': check_mark_language_ru,
            'en': check_mark_language_en
        }
    });

    setupSettingSelection({
        button: setting_theme_selection,
        settingMenu: setting_selection,
        selectionList: theme_selection_list,
        storageKey: 'theme',
        checkMarks: {
            'dark': check_mark_dark_theme,
            'light': check_mark_light_theme
        }
    });

    setting_section_button_back.forEach(button => {
        button.addEventListener('click', function(e) {
            const currentMenu = e.target.closest('.settings-panel');
            currentMenu.classList.add(CLASS_HIDDEN);
            setting_selection.classList.remove(CLASS_HIDDEN);
        })
    })

    initLanguageButton({
        button:language_ru, 
        language:'ru', 
        active_check_mark:check_mark_language_ru, 
        inactive_check_mark:[check_mark_language_en]
    });

    initLanguageButton({
        button:language_en, 
        language:'en', 
        active_check_mark:check_mark_language_en, 
        inactive_check_mark:[check_mark_language_ru]
    });

    initThemeButton({
        button:light_theme,
        theme_name:'light',
        active_check_mark:check_mark_light_theme,
        inactive_check_mark:[check_mark_dark_theme]
    });

    initThemeButton({
        button:dark_theme,
        theme_name:'dark',
        active_check_mark:check_mark_dark_theme,
        inactive_check_mark:[check_mark_light_theme]
    });
}

async function init(language) {
    let geoInfo;
    await changeLanguage(language);
    geoInfo = await fetchGeoLocation({cityName:localStorage.getItem('location')});
    geoName.textContent = geoInfo.fullName; 
}

function initLanguageButton({button, language, active_check_mark, inactive_check_mark=[]}) {
    button.addEventListener('click', function() {
        if (!active_check_mark.classList.contains(CLASS_HIDDEN)) {
            return
        }

        init(language);

        inactive_check_mark.forEach(check_mark => {
            check_mark.classList.add(CLASS_HIDDEN);
        });

        active_check_mark.classList.remove(CLASS_HIDDEN);
    })
}

function initThemeButton({button, theme_name, active_check_mark, inactive_check_mark=[]}) {
    button.addEventListener('click', function() {
        if (!active_check_mark.classList.contains(CLASS_HIDDEN)) {
            return
        }
        changeTheme(theme_name);
        active_check_mark.classList.remove(CLASS_HIDDEN)

        inactive_check_mark.forEach(check_mark => {
            check_mark.classList.add(CLASS_HIDDEN);
        })
    })
}

function setupSettingSelection({ button, settingMenu, selectionList, storageKey, checkMarks }) {
    button.addEventListener('click', function() {
        settingMenu.classList.add(CLASS_HIDDEN);
        selectionList.classList.remove(CLASS_HIDDEN);

        const currentValue = localStorage.getItem(storageKey);

        Object.keys(checkMarks).forEach(value => {
            if (value === currentValue) {
                checkMarks[value].classList.remove(CLASS_HIDDEN);
            } else {
                checkMarks[value].classList.add(CLASS_HIDDEN);
            }
        });
    });
}