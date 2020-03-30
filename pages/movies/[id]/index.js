import Link from 'next/link'
import { useRouter } from "next/router";
import { getMovieById, deleteMovie } from "../../../actions";

const MovieDetail = props => {
  const { movie } = props;

  const router = useRouter()

  const handleDeleteMovie = (id) => {
    deleteMovie(id).then(() => {
      router.push('/')
    })
  }


  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{movie.name}</h1>
        <p className="lead">{movie.description}</p>
        <hr className="my-4" />
        <p>{movie.genre}</p>
        <button className="btn btn-primary btn-lg mr-1" href="#" role="button">Learn more</button>
        <button onClick={() => handleDeleteMovie(movie.id)} className="btn btn-danger btn-lg" href="#" role="button">Delete</button>
        <Link href="/movies/[id]/edit" as={`/movies/${movie.id}/edit`}>
          <button
            className="btn btn-warning btn-lg"
            role="button">Edit</button>
        </Link>
      </div>
      <p className="desc-text">{movie.longDesc}</p>
      <style jsx>
        {`
          .desc-text {
            font-size: 21px;
          }
        `}
      </style>
    </div>
  );
};

MovieDetail.getInitialProps = async context => {
  const { id } = context.query;
  const movie = await getMovieById(id);
  return { movie };
};

export default MovieDetail;
