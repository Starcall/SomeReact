
export default function AddItem(props) {
    return (
        <form onSubmit={props.handleFormSubmit}>
            <div>
                <label htmlFor="item-name">Item name</label>
                <input
                    id="item-name"
                    type="text"
                    value={props.name}
                    onChange={(e) => props.setName(e.target.value)}
                    placeholder="Название товара"
                    className="ui-textfield"
                />
            </div>
            <div>
                <label htmlFor="item-description">Item description</label>
                <input
                    id="item-description"
                    onChange={(e) => props.setDescription(e.target.value)}
                    type="text"
                    value={props.description}
                    placeholder="Описание товара"
                    className="ui-textfield"
                />
            </div>
            <div className="form-footer">
                <div className="validation">
                    {props.name === "" || props.description === ""
                        ? "Имя товар и описания должны быть заполнены"
                        : ""}
                </div>
                <input
                    disabled={props.name === "" || props.description === ""}
                    type="submit"
                    className="ui-button"
                    value="Добавить"
                />
            </div>
        </form>)
}