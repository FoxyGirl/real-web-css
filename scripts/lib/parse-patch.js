module.exports = {
    'wikipedia.org': {
        comment: 'Parser has no support for `!ie` hack',
        patch: function(css) {
            return css.replace(/!ie/g, '!important');
        }
    },
    'amazon.com': {
        patch: function(css) {
            return css.replace(/\*\|:/g, ':');
        }
    },
    'amazon.de': {
        patch: function(css) {
            return css.replace(/\*\|:/g, ':');
        }
    },
    'amazon.in': {
        patch: function(css) {
            return css.replace(/\*\|:/g, ':');
        }
    },
    'amazon.co.uk': {
        patch: function(css) {
            return css.replace(/\*\|:/g, ':');
        }
    },
    'amazon.co.jp': {
        patch: function(css) {
            return css.replace(/\*\|:/g, ':');
        }
    },
    'amazon.fr': {
        patch: function(css) {
            return css.replace(/\*\|:/g, ':');
        }
    },
    'amazon.it': {
        patch: function(css) {
            return css.replace(/\*\|:/g, ':');
        }
    },
    'sina.com.cn': {
        patch: function(css) {
            return css.replace(/;px;/g, ';');
        }
    },
    'imgur.com': {
        patch: function(css) {
            return css
                .replace(/},\./g, '}.')
                .replace(/font-weight:bold:/g, 'font-weight:bold;');
        }
    },
    'stackoverflow.com': {
        comment: 'Parser has no support for `!ie7` hack',
        patch: function(css) {
            return css.replace(/!ie7/g, '!important');
        }
    },
    'stackexchange.com': {
        comment: 'Parser has no support for `!ie7` hack',
        patch: function(css) {
            return css.replace(/!ie7/g, '!important');
        }
    },
    'nytimes.com': {
        comment: 'Typos',
        patch: function(css) {
            return css
                .replace(/0=;/g, '0;')
                .replace(/##ffffff/g, '#ffffff');
        }
    },
    'vice.com': {
        patch: function(css) {
            return css
                .replace(/:nth-child\(10pxn/g, ':nth-child(10n')
                .replace(/:nth-child\(0\.9375remn/g, ':nth-child(n')
                .replace(/:nth-child\(1\.875remn/g, ':nth-child(n')
                .replace(/\$mid-gray/g, '\\$mid-gray')
                .replace(/\$article/g, '\\$article');
        }
    },
    'quora.com': {
        patch: function(css) {
            return css.replace(/:not\('\.results_frame\'\)/g, ':not(.results_frame)');
        }
    },
    'mediafire.com': {
        patch: function(css) {
            return css
                .replace(/overflow: hidden:/g, 'overflow: hidden;')
                .replace(/margin-right: 0 padding:/g, 'margin-right: 0; padding:')
                .replace(/color: #;/g, '')
                .replace(/Initial\*\/\//g, 'Initial*/')
                .replace(/width: 360px -webkit-border/g, 'width: 360px; -webkit-border');
        }
    },
    'huaban.com': {
        patch: function(css) {
            return css.replace(/background:img\(/g, 'background:url(');
        }
    },
    'w3schools.com': {
        patch: function(css) {
            return css.replace(/input:\.focus/g, 'input:focus');
        }
    },
    'sohu.com': {
        comment: 'Missed semicolon',
        patch: function(css) {
            return css
                .replace(/font-weight:boldtext-/g, 'font-weight:bold;text-')
                .replace(/[“”]/g, '"');
        }
    },
    'gmw.cn': {
        patch: function(css) {
            return css
                .replace(/;e;/g, ';')
                .replace(/;100}/g, ';}');
        }
    },
    'xvideos.com': {
        comment: 'Missed `n` in `:nth-child()`',
        patch: function(css) {
            return css
                .replace(/:nth-child\(\d\+1\)/g, ':nth-child(3n+1)');
        }
    },
    'adobe.com': {
        patch: function(css) {
            return css
                .replace(/\),27\.1875rem/g, ')')
                .replace(/:not \(/g, ':not(');
        }
    },
    'hao123.com': {
        patch: function(css) {
            return css
                .replace(/white-space:nowrap -o-text-overflow/g, 'white-space:nowrap; -o-text-overflow')
                .replace(/\}\}\.leftad\{/g, '}.leftad{');
        }
    },
    'sina.com.cn': {
        patch: function(css) {
            return css
                .replace(/;!important}/g, ';}')
                .replace(/;px;/g, ';');
        }
    },
    'youtube.com': {
        comment: 'Using `progid` for `background` property',
        patch: function(css) {
            return css.replace(
                /background:progid:DXImageTransform\.Microsoft\.gradient\(([^)]+)\)/g,
                'background:"progid:DXImageTransform.Microsoft.gradient($1)"'
            );
        }
    },
    'yahoo.com': {
        comment: 'Unescaped comma in class',
        patch: function(css) {
            return css.replace(/\.Lts\\\(-\.31em\\\)/g, '.Lts\\(-\\.31em\\)');
        }
    },
    'ebay.com': {
        comment: 'Unprocessed Less escaping',
        patch: function(css) {
            return css.replace(/~"([^"]+)"/g, '$1');
        }
    },
    'ebay.de': {
        comment: 'Unprocessed Less escaping',
        patch: function(css) {
            return css.replace(/~"([^"]+)"/g, '$1');
        }
    },
    'ebay.co.uk': {
        comment: 'Unprocessed Less escaping',
        patch: function(css) {
            return css.replace(/~"([^"]+)"/g, '$1');
        }
    },
    'taobao.com': {
        comment: 'Used `filter()` instead of `alpha()`',
        patch: function(css) {
            return css.replace(/filter:filter\(/g, 'filter:alpha(');
        }
    },
    'taobao.com': {
        comment: 'Missed substitutions',
        patch: function(css) {
            return css
                .replace(/@mobileu_gradient_two_mob/g, 'mobileu_gradient_two_mob')
                .replace(/color:#;/g, 'color:#000;');
        }
    },
    'nicovideo.jp': {
        comment: 'Typos',
        patch: function(css) {
            return css
                .replace(/text-decoration:underline:/g, 'text-decoration:underline;')
                .replace(/progid :DXImageTransform/g, 'progid:DXImageTransform');
        }
    },
    'bankofamerica.com': {
        comment: 'Typo',
        patch: function(css) {
            return css
                .replace(/bottom:border:0/g, 'border:0');
        }
    },
    'foxnews.com': {
        patch: function(css) {
            return css
                .replace(/padding;0;/g, 'padding:0;')
                .replace(/\*\/\.HPP/g, '/*.HPP');
        }
    },
    'douyu.com': {
        patch: function(css) {
            return css
                .replace(/!ie/g, '!important')
                .replace(/preserve-3d moz-transform-style:/g, 'preserve-3d; -moz-transform-style:')
                .replace(/\. \.normallevel/g, '.normallevel')
                .replace(/_png:#00f\/ie6\/[a-z]+\.png/g, '');
        }
    },
    'outbrain.com': {
        comment: 'Missed trailing curly bracket',
        patch: function(css) {
            return css + '}';
        }
    },
    'detik.com': {
        comment: 'Missed trailing curly bracket',
        patch: function(css) {
            return css + '}';
        }
    },
    'chinadaily.com.cn': {
        comment: 'Missed trailing curly bracket',
        patch: function(css) {
            return css + '}';
        }
    },
    'pinterest.com': {
        patch: function(css) {
            return css.replace(/:global/g, '');
        }
    },
    'pinimg.com': {
        patch: function(css) {
            return css.replace(/:global/g, '');
        }
    },
    'microsoft.com': {
        comment: 'Missed substitutions',
        patch: function(css) {
            return css.replace(/[a-z\-]+:\s*#\{\$[a-z\-]+\};/gi, '');
        }
    },
    'pixnet.net': {
        comment: 'Wrong function `image-url()` instead of `url()`',
        patch: function(css) {
            return css.replace(/image-url\(ie8/gi, 'url(ie8');
        }
    },
    'ntd.tv': {
        patch: function(css) {
            return css.replace(/;s}/gi, ';}');
        }
    },
    'dropbox.com': {
        comment: 'Missed preprocessor function',
        patch: function(css) {
            return css.replace(/ selector-append\(/gi, ':selector-append(');
        }
    },
    'adf.ly': {
        patch: function(css) {
            return css
                .replace(/}\n}\n#tools-tabs/gi, '}\n#tools-tabs')
                .replace(/none;',/g, 'none;');
        }
    },
    'porn555.com': {
        patch: function(css) {
            return css.replace(/\$tag-surprise/gi, '\\$tag-surprise');
        }
    },
    'booking.com': {
        patch: function(css) {
            return css
                .replace(/\.--/g, '.-')
                .replace(/-0-transition/gi, '-o-transition')
                .replace(/\.\.ge-genius/g, '.ge-genius');
        }
    },
    'flipkart.com': {
        comment: 'Too many errors due non-processed nesting'
    },
    'steampowered.com': {
        patch: function(css) {
            return css
                .replace(/;\);/g, ';')
                .replace(/width 616px/, 'width: 616px')
                .replace(/background: background:/, 'background: ');
        }
    },
    'dailymail.co.uk': {
        patch: function(css) {
            return css.replace(/\$control-bar/g, '\\$control-bar');
        }
    },
    'walmart.com': {
        patch: function(css) {
            return css.replace(/\$font-size-small/g, '\\$font-size-small');
        }
    },
    'nih.gov': {
        patch: function(css) {
            return css.replace(/, {/g, ' {');
        }
    }
}
