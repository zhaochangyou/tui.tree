/**
 * A default values for tree
 * @module defaults
 */

/**
 * Make class names
 * @param {string} prefix - Prefix of class name
 * @param {string} keys - Keys of class names
 * @returns {object.<string, string>}
 */
function makeClassNames(prefix, keys) {
    var obj = {};
    tui.util.forEach(keys, function(key) {
        obj[key + 'Class'] = prefix + key;
    });
    return obj;
}

/**
 * @const
 * @type {object}
 * @property {boolean} useDrag - Default: false
 * @property {boolean} useHelper - Default: false
 * @property {object} stateLabel - State label in node
 *  @property {string} stateLabel.opened - Default: '-'
 *  @property {string} stateLabel.closed - Default: '+'
 * @property {object} template - Template html for the nodes.
 * @property {object} classNames - Class names of elements in tree
 *      @property {string} openedClass - A class name for opened node
 *      @property {string} closedClass - A class name for closed node
 *      @property {string} selectedClass - A class name for selected node
 *      @property {string} subtreeClass  - A class name for subtree in internal node
 *      @property {string} toggleClass - A class name for toggle button in internal node
 *      @property {string} titleClass - A class name for title element in a node
 *      @property {string} inputClass - A class name for editable element in a node
 *  @property {string} template.internalNode - A template html for internal node.
 *  @property {string} template.leafNode - A template html for leaf node.
 */
module.exports = {
    useDrag: false,
    useHelper: false,
    defaultState: 'closed',
    stateLabel: {
        opened: '-',
        closed: '+'
    },
    helperPos: {
        y: 10,
        x: 10
    },
    classNames: makeClassNames('tui-tree-', [
        'opened',
        'closed',
        'selected',
        'subtree',
        'toggle',
        'title',
        'input'
    ]),
    template: {
        template: {
            internalNode:
            '<li id="tui-tree-node-{{nodeId}}" class="tui-tree-node {{stateClass}}" data-depth="{{depth}}">' +
                '<button type="button" class="{{toggleClass}}">{{stateLabel}}</button>' +
                '<span class="{{titleClass}}">{{d_title}}</span>' +
                '<ul class="{{subtreeClass}}">{{d_children}}</ul>' +
            '</li>',
            leafNode:
            '<li id="tui-tree-node-{{nodeId}}" class="tui-tree-node tui-tree-leaf" data-depth="{{depth}}">' +
                '<span class="{{titleClass}}">{{d_title}}</span>' +
            '</li>'
        }
    }
};