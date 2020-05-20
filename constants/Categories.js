import argonTheme from './argonTheme';
function selectCategory(category) {
    switch (category) {
        case 'math':
            return argonTheme.COLORS.DEFAULT;
        case 'physics':
            return argonTheme.COLORS.RUSSIAN_VIOLET;
        case 'finance':
            return argonTheme.COLORS.RACKLEY;
        case 'biology':
            return 'green';
        case 'activism':
            return 'yellow';
        default:
            return 'pink';
    }
}

export {selectCategory};
