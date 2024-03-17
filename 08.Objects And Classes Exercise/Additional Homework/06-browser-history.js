function solve(browserHistory, commands) {

    for (const line of commands) {
        const [command, ...appString] = line.split(' ');
        const app = appString.join(' ')
        switch (command) {
            case 'Open':
                
                    if (!browserHistory['Open Tabs'].includes(app)) {
                        browserHistory['Open Tabs'].push(app);
                    }
                    browserHistory['Browser Logs'].push(`${command} ${app}`)
                
                break;
            case 'Close':
              
                    if (browserHistory['Open Tabs'].includes(app)) {
                        browserHistory['Open Tabs'].splice(browserHistory['Open Tabs'].indexOf(app), 1);
                        browserHistory['Recently Closed'].push(app);
                        browserHistory['Browser Logs'].push(`${command} ${app}`);
                    }
                
                break;
            case 'Clear':
                browserHistory['Open Tabs'] = [];
                browserHistory['Recently Closed'] = [];
                browserHistory['Browser Logs'] = [];
                break;
        }
    }

    console.log(browserHistory['Browser Name']);
    console.log(`Open Tabs: ${browserHistory['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${browserHistory['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${browserHistory['Browser Logs'].join(', ')}`);
}

// solve({
//     "Browser Name": "GoogleChrome", "Open Tabs": ["Facebook", "YouTube", "GoogleTranslate"], "Recently Closed": ["Yahoo", "Gmail"],
//     "Browser Logs": ["Open YouTube", "Open Yahoo", "Open GoogleTranslate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
// },
//     ["Close Facebook", "Open StackOverFlow", "Open Google"]);


solve({
    "Browser Name": "Mozilla Firefox", "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
},
["Open Wikipedia", "Clear History and Cache", "Open Twitter"])