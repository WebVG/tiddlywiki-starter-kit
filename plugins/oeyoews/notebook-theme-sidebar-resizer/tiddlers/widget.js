/*\
title: $:/plugins/oeyoews/notebook-theme-sidebar-resizer/widget.js
type: application/javascript
module-type: widget

notebook-theme-sidebar-resizer widget

\*/
const { widget: Widget } = require('$:/core/modules/widgets/widget.js');
// TODO: support left or right

class NotebookResizer extends Widget {
  constructor(parseTreeNode, options) {
    super(parseTreeNode, options);
    this.isResizing = false;
    this.tiddler = '$:/themes/nico/notebook/metrics/sidebar-width';
  }

  render(parent, nextSibling) {
    if (!$tw.browser) return;
    this.parentDomNode = parent;
    this.computeAttributes();
    this.execute();

    const createElement = $tw.utils.domMaker;

    const resizer = createElement('div', {
      class:
        'hover:cursor-ew-resize hover:bg-gray-200 rounded-full transition-all h-full w-[6px] absolute top-0 right-0',
      // attributes: { id: 'om-resizer' },
    });

    // let width = $tw.wiki.getTiddlerText(this.tiddler).replace('px', '');

    // TODO: support reset sidebar width
    resizer.addEventListener('pointerdown', (e) => {
      this.isResizing = true;
      e.preventDefault(); // 阻止默认的文本选择行为
      document.addEventListener('pointermove', resize);

      document.addEventListener('pointerup', stopResize);
    });

    const resize = (e) => {
      // TODO: throttle requestanimation
      if (this.isResizing) {
        // TODO: use percent
        if (e.clientX > 750 || e.clientX < 250) {
          return;
        }
        this.updateSidebarWidth(e.clientX);
      }
    };

    const stopResize = () => {
      this.isResizing = false;
      document.removeEventListener('pointermove', resize);
    };

    parent.insertBefore(resizer, nextSibling);
    this.domNodes.push(resizer);
  }

  updateSidebarWidth(width) {
    requestAnimationFrame(() => {
      $tw.wiki.setText(this.tiddler, null, null, `${width}px`);
    });
  }

  refresh() {
    return false;
  }
}

/**
 * @description notebook-theme-sidebar-resizer widget
 */
exports.nbresizer = NotebookResizer;
