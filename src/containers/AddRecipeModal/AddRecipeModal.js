import React, { Component } from "react";
import CloudUploadOutlinedIcon from "@material-ui/icons/CloudUploadOutlined";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import classes from "./AddRecipeModal.module.css";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import Spinner from "../../components/UI/spinner/spinner";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";

class AddRecipeModal extends Component {
  state = {
    newRecipe: {
      title: "",
      source_url: "",
      image_url: "",
      cooking_time: "",
      servings: "",
      publisher: "",
    },
    ingredients: {},
  };

  handleChange = (obj) => (e) => {
    let x = this.state[obj];
    x[e.target.name] = e.target.value;
    this.setState({ [obj]: x });
  };

  uploadHandler = (e) => {
    e.preventDefault();
    this.props.addNewRecipe(this.state.newRecipe, this.state.ingredients);
    this.setState({
      newRecipe: {
        title: "",
        source_url: "",
        image_url: "",
        cooking_time: "",
        servings: "",
        publisher: "",
      },
      ingredients: {},
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.uploadClick !== this.props.uploadClick)
      if (this.props.uploadClick) {
        this.props.uploadNewRecipe(this.props.newRecipe).then(() => {
          if (!this.props.err) {
            this.props.addBookmark(this.props.newRecipe);
            this.props.persistBookmark();
            this.props.updateActiveClass(this.props.newRecipe.id);
          }
        });
      }
  }

  render() {
    const classModal = this.props.show
      ? [classes.addRecipeWindow]
      : [classes.addRecipeWindow, classes.hidden];

    const errMess = this.props.err ? (
      <div className={classes.message2}>
        <SentimentVeryDissatisfiedIcon className={classes.messIcon} />
        <p>Failed to upload recipe. Please input right format!</p>
      </div>
    ) : (
      <div className={classes.message2}>
        <InsertEmoticonIcon className={classes.messIcon} />
        <p>Recipe successfully uploaded!</p>
      </div>
    );

    let upload = this.props.uploadRecipe ? <Spinner /> : errMess;
    let form = this.props.uploadClick ? (
      upload
    ) : (
      <form className={classes.upload}>
        <div className={classes.upload__column}>
          <h3 className={classes.upload__heading}>Recipe data</h3>
          <label>Title</label>
          <input
            required
            onChange={this.handleChange("newRecipe")}
            value={this.state.newRecipe.title}
            name="title"
            type="text"
            placeholder="Title must be at least 3 characters"
          />
          <label>URL</label>
          <input
            onChange={this.handleChange("newRecipe")}
            value={this.state.newRecipe.source_url}
            required
            name="source_url"
            type="text"
            placeholder="Source url must be at least 5 characters"
          />
          <label>Image URL</label>
          <input
            onChange={this.handleChange("newRecipe")}
            value={this.state.newRecipe.image_url}
            required
            name="image_url"
            type="text"
            placeholder="Image url must be at least 4 characters"
          />
          <label>Publisher</label>
          <input
            onChange={this.handleChange("newRecipe")}
            value={this.state.newRecipe.publisher}
            required
            name="publisher"
            type="text"
            placeholder="Publisher must be at least 4 characters"
          />
          <label>Prep time</label>
          <input
            onChange={this.handleChange("newRecipe")}
            value={this.state.newRecipe.cooking_time}
            required
            name="cooking_time"
            type="number"
            placeholder="Preparation time"
          />
          <label>Servings</label>
          <input
            onChange={this.handleChange("newRecipe")}
            value={this.state.newRecipe.servings}
            required
            name="servings"
            type="number"
            placeholder="Servings"
          />
        </div>

        <div className={classes.upload__column}>
          <h3 className={classes.upload__heading}>Ingredients</h3>
          <label>Ingredient 1</label>
          <input
            onChange={this.handleChange("ingredients")}
            type="text"
            required
            name="ingredient-1"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 2</label>
          <input
            onChange={this.handleChange("ingredients")}
            type="text"
            name="ingredient-2"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 3</label>
          <input
            onChange={this.handleChange("ingredients")}
            type="text"
            name="ingredient-3"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 4</label>
          <input
            onChange={this.handleChange("ingredients")}
            type="text"
            name="ingredient-4"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 5</label>
          <input
            onChange={this.handleChange("ingredients")}
            type="text"
            name="ingredient-5"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 6</label>
          <input
            onChange={this.handleChange("ingredients")}
            type="text"
            name="ingredient-6"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
        </div>

        <button className={classes.uploadBtn} onClick={this.uploadHandler}>
          <CloudUploadOutlinedIcon className={classes.modalIcon} />
          <span>Upload</span>
        </button>
      </form>
    );
    return (
      <React.Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div className={classModal.join(" ")}>
          <button
            onClick={this.props.modalClosed}
            className={classes.btnCloseModal}
          >
            &times;
          </button>
          {form}
        </div>
      </React.Fragment>
    );
  }
}

export default AddRecipeModal;
