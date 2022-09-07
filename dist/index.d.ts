/// <reference types="react" />
import ReactReconciler from 'react-reconciler';
import { Node } from 'ssml-dom';
declare const reconciler: ReactReconciler.Reconciler<Node, any, any, any, any>;
declare const ReactSSML: {
    /**
     * @param {JSX.Element} element what to render
     * @param {Node} container where to render
     */
    render(element: JSX.Element, container: Node): any;
    renderToString(element: JSX.Element): string;
};
export { ReactSSML, reconciler };
export default ReactSSML;
