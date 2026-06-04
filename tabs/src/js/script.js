const tabs = ["first-tab", "second-tab", "third-tab", "fourth-tab"];
const contents = [
  "First Tab content to be displayed here.",
  "Second Tab content to be displayed here.",
  "Third Tab content to be displayed here.",
  "Fourth Tab content to be displayed here."
];
for (let i = 0; i < tabs.length; i++) {
    document.getElementById(tabs[i]).onclick = function () {
        document.getElementById("tab-text").textContent = contents[i];
        
        for (let j = 0; j < tabs.length; j++) {
            document.getElementById(tabs[j]).classList.remove("active")
        }

        document.getElementById(tabs[i]).classList.add("active");
    };
}

/*for (let i = 0; i < tabs.length; i++) {
    document.getElementById(tabs[i]).onclick = function () {
        document.getElementById("tab-text").textContent = contents[i];
        
        for (let j = 0; j < tabs.length; j++) {
            if (j === i) {
                document.getElementById(tabs[j]).style.color = "black";
                document.getElementById(tabs[j]).style.borderBottom = "2px solid black";
            } else {
                document.getElementById(tabs[j]).style.color = "gray";
                document.getElementById(tabs[j]).style.borderBottom = "0px solid black";
            }
        }
    };
}*/