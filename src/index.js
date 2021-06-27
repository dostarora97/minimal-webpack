async function getComponent() {
    const element = document.createElement('div');
    const {default: _} = await import(
        /* webpackMode: "lazy" */
        /* webpackPrefetch: true */
        /* webpackExports: ["join"] */
        'lodash');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    await import('./style.css');
    element.classList.add('hello');

    const {default: Icon} = await import('./image.png')
    const myImage = new Image();
    myImage.src = Icon;
    console.log(Icon);
    element.appendChild(myImage);

    return element;
}

getComponent().then((component) => {
    document.body.appendChild(component);
});
