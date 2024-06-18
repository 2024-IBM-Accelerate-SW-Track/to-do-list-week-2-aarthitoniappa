
        />
        <Button
          style={{ marginLeft: '10px' }}
          onClick={this.handleSubmit}
          variant="contained"
          color="primary"
          data-testid="new-item-button"
        >
          Add
        </Button>
      </form>
    );
  }
}
export default AddTodo;