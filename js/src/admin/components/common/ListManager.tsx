import Component, { ComponentAttrs } from 'flarum/common/Component';
import app from 'flarum/admin/app';

export interface ListManagerAttrs<T> extends ComponentAttrs {
  items: T[];
  onUpdate: (items: T[]) => void;
  createItem: () => T;
  renderItem: (item: T, index: number, onUpdate: (item: T) => void, onRemove: () => void) => any;
  title?: string;
  addButtonText?: string;
  allowReorder?: boolean;
  maxItems?: number;
}

export default class ListManager<T> extends Component<ListManagerAttrs<T>> {
  draggedIndex: number | null = null;

  view() {
    const {
      items,
      onUpdate,
      createItem,
      renderItem,
      title,
      addButtonText,
      allowReorder = true,
      maxItems
    } = this.attrs;

    const canAddMore = !maxItems || items.length < maxItems;

    return (
      <div className="FooterConfig-listManager">
        {title && <h3>{title}</h3>}
        
        <div className="FooterConfig-listItems">
          {items.map((item, index) => (
            <div
              key={index}
              className={`FooterConfig-listItem ${allowReorder ? 'FooterConfig-listItem--draggable' : ''}`}
              draggable={allowReorder}
              ondragstart={allowReorder ? (e: DragEvent) => this.handleDragStart(e, index) : undefined}
              ondragover={allowReorder ? (e: DragEvent) => this.handleDragOver(e) : undefined}
              ondrop={allowReorder ? (e: DragEvent) => this.handleDrop(e, index) : undefined}
              ondragend={allowReorder ? () => this.handleDragEnd() : undefined}
            >
              {allowReorder && (
                <div className="FooterConfig-dragHandle">
                  <i className="fas fa-grip-vertical"></i>
                </div>
              )}
              
              <div className="FooterConfig-itemContent">
                {renderItem(
                  item,
                  index,
                  (updatedItem: T) => this.updateItem(index, updatedItem),
                  () => this.removeItem(index)
                )}
              </div>
            </div>
          ))}
        </div>

        {canAddMore && (
          <button
            type="button"
            className="Button FooterConfig-addButton"
            onclick={() => this.addItem()}
          >
            <i className="fas fa-plus"></i>
            {addButtonText || app.translator.trans('core.admin.edit_footer.add_item')}
          </button>
        )}
      </div>
    );
  }

  addItem() {
    const { items, onUpdate, createItem } = this.attrs;
    const newItem = createItem();
    onUpdate([...items, newItem]);
  }

  updateItem(index: number, updatedItem: T) {
    const { items, onUpdate } = this.attrs;
    const newItems = [...items];
    newItems[index] = updatedItem;
    onUpdate(newItems);
  }

  removeItem(index: number) {
    const { items, onUpdate } = this.attrs;
    const newItems = items.filter((_, i) => i !== index);
    onUpdate(newItems);
  }

  handleDragStart(e: DragEvent, index: number) {
    this.draggedIndex = index;
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = 'move';
    }
  }

  handleDragOver(e: DragEvent) {
    e.preventDefault();
    if (e.dataTransfer) {
      e.dataTransfer.dropEffect = 'move';
    }
  }

  handleDrop(e: DragEvent, dropIndex: number) {
    e.preventDefault();
    
    if (this.draggedIndex === null || this.draggedIndex === dropIndex) {
      return;
    }

    const { items, onUpdate } = this.attrs;
    const newItems = [...items];
    const draggedItem = newItems[this.draggedIndex];
    
    // Remove dragged item
    newItems.splice(this.draggedIndex, 1);
    
    // Insert at new position (adjust index if necessary)
    const insertIndex = this.draggedIndex < dropIndex ? dropIndex - 1 : dropIndex;
    newItems.splice(insertIndex, 0, draggedItem);
    
    onUpdate(newItems);
  }

  handleDragEnd() {
    this.draggedIndex = null;
  }
}