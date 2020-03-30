import { useRouter } from "next/router";
import Modal from "./modal";
import MovieCreateForm from "./movieCreateForm";
import { createMovie } from "../actions";

const SideMenu = props => {
  let modal = null;
  const { categories, appName } = props;

  const router = useRouter();

  const handleCreateMovie = movie => {
    createMovie(movie).then(movies => {
      // Close modal after create
      console.log(JSON.stringify(movies));
      modal.closeModal();
      router.push("/");
    });
  };

  return (
    <div>
      <Modal ref={ele => (modal = ele)} hasSubmit={false}>
        <MovieCreateForm handleFormSubmit={handleCreateMovie} />
      </Modal>
      <h1 className="my-4">{appName}</h1>
      <div className="list-group">
        {categories.map(item => (
          <a
            onClick={() => props.changeCategory(item.name)}
            key={item.id}
            href="#"
            className={`list-group-item ${
              props.activeCategory === item.name ? "active" : ""
            }`}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
