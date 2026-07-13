import { notification_container } from "../constants/dom-elements.js";

import { keys } from "../i18n/keys.js";
import { t } from "../i18n/translation.js";
import { switchClasses } from "../utils/utils.js";
import { CLASS_HIDDEN } from "../../config/init-state.js";

let notificationTimeout;

const success_notification = "success_notification";
const error_notification = "error_notification";
const warning_notification = "warning_notification";

export function showNotification({success, error, warning, update_data, search_data}) {
    clearTimeout(notificationTimeout);

    let activeClass = '';

    if (success) {
        if (update_data) {
            notification_container.textContent = t(keys.notifications.refresh_success);
        }

        if (search_data) {
            notification_container.textContent = t(keys.notifications.data_loaded);
        }
        activeClass = success_notification;
    }

    if (error) {
        notification_container.textContent = t(keys.notifications.errorLocation);
        activeClass = error_notification;
    }

    if (warning) {
        notification_container.textContent = t(keys.notifications.location_not_found);
        activeClass = warning_notification;
    }

    switchClasses({
        container: [notification_container],
        classAdd: [activeClass],
        classRemove: [success_notification, error_notification, warning_notification]
    });

    notification_container.classList.remove(CLASS_HIDDEN);

    notificationTimeout = setTimeout(() => {
        notification_container.classList.add(CLASS_HIDDEN);
    }, 2000);
}