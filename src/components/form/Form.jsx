import React, { useEffect, useRef, useState } from "react";

const Form = ({ setBooks, edit, setEdit }) => {
  let title = useRef("");
  let author = useRef("");
  let description = useRef("");
  const [url, setUrl] = useState("");
  const [price, setPrice] = useState("");
  const [inStock, setInStock] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("fiction");
  const [otherGenre, setOtherGenre] = useState("");
  const [otherGenreValue, setOtherGenreValue] = useState("");
  const [submitBtn, setSubmitBtn] = useState("Create");

  const handleGenreChange = (e) => {
    setSelectedGenre(() => e.target.value);
    setOtherGenre(() => e.target.value === "other");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title: title.current.value,
      author: author.current.value,
      description: description.current.value,
      url,
      price,
      inStock,
      genre: selectedGenre === "other" ? otherGenreValue : selectedGenre,
      otherGenre: otherGenre,
    };
    if (edit) {
      setBooks((prev) =>
        prev.map((book, index) => (index === edit.id ? newBook : book))
      );
      setEdit("");
    } else {
      setBooks((prev) => [...prev, newBook]);
    }

    title.current.value = "";
    author.current.value = "";
    description.current.value = "";
    setUrl(() => "");
    setPrice(() => "");
    setInStock(() => "");
    setSelectedGenre(() => "fiction");
    setUrl(() => "");
    setUrl(() => "");
    setOtherGenre(() => "");
    setOtherGenreValue(() => "");
  };

  useEffect(() => {
    if (edit) {
      setSubmitBtn("Update");
      title.current.value = edit.title;
      author.current.value = edit.author;
      description.current.value = edit.description;
      setUrl(() => edit.url);
      setPrice(() => edit.price);
      setInStock(() => edit.inStock);
      if (edit.otherGenre) {
        setOtherGenre(true);
        setOtherGenreValue(edit.genre);
        setSelectedGenre("other");
      } else {
        setSelectedGenre(edit.genre);
      }
    } else {
      setSubmitBtn("Create");
    }
  }, [edit]);

  return (
    <>
      <section className="min-h-screen w-screen flex items-center bg-gradient-to-br from-[#72B6E3] to-[#9B5CB5]">
        <div className="container mx-auto flex justify-center items-center ">
          <div className="p-7 bg-white rounded shadow-xl">
            <form action="" onSubmit={handleSubmit}>
              <h1 className="text-3xl font-bold pb-5">
                Create{" "}
                <span className="relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 before:bg-gradient-to-l before:from-purple-500 before:to-blue-500 before:rounded">
                  Bo
                </span>
                ok
              </h1>

              <div className="font-semibold tracking-wider text-[17px] flex gap-10 [@media(max-width:850px)]:flex-col">
                <div>
                  <label className="" htmlFor="title">
                    Title
                  </label>
                  <br />
                  <input
                    className="mt-1.5 mb-7 placeholder-gray-500 indent-3 h-10 font-light border-2 border-gray-400 rounded w-full outline-gray-500"
                    placeholder="Enter the title"
                    type="text"
                    id="title"
                    ref={title}
                    required
                  />
                  <label className="" htmlFor="author">
                    Author
                  </label>
                  <br />
                  <input
                    className="mt-1.5 mb-7 placeholder-gray-500 indent-3 h-10 font-light border-2 border-gray-400 rounded w-full outline-gray-500"
                    placeholder="Enter the author"
                    type="text"
                    id="author"
                    ref={author}
                    required
                  />
                  <label className="" htmlFor="desc">
                    Description
                  </label>
                  <br />
                  <input
                    className="mt-1.5 mb-7 placeholder-gray-500 indent-3 h-10 font-light border-2 border-gray-400 rounded w-full outline-gray-500"
                    placeholder="Enter the description"
                    type="text"
                    id="desc"
                    ref={description}
                    required
                  />
                </div>

                <div>
                  <label className="" htmlFor="url">
                    Url link
                  </label>
                  <br />
                  <input
                    className="mt-1.5 mb-7 placeholder-gray-500 indent-3 h-10 font-light border-2 border-gray-400 rounded w-full outline-gray-500"
                    placeholder="Enter the url"
                    type="url"
                    id="url"
                    value={url}
                    onChange={(e) => setUrl(() => e.target.value)}
                    required
                  />

                  <label className="" htmlFor="price">
                    Price (in US dollars)
                  </label>
                  <br />
                  <input
                    className="mt-1.5 mb-7 placeholder-gray-500 indent-3 h-10 font-light border-2 border-gray-400 rounded w-full outline-gray-500"
                    placeholder="Enter the price"
                    type="number"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(() => e.target.value)}
                    required
                  />
                  <label className="" htmlFor="inStock">
                    In stock count
                  </label>
                  <br />
                  <input
                    className="mt-1.5 mb-7 placeholder-gray-500 indent-3 h-10 font-light border-2 border-gray-400 rounded w-full outline-gray-500"
                    placeholder="Enter in stock count"
                    type="number"
                    id="inStock"
                    value={inStock}
                    onChange={(e) => setInStock(() => e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <span className="font-semibold tracking-wider text-2xl/loose block mb-1.5">
                  Genre
                </span>
                <div className="flex gap-10 flex-wrap pb-3.5">
                  {[
                    "fiction",
                    "drama",
                    "romance",
                    "sci-fi",
                    "adventure",
                    "other",
                  ].map((genre) => (
                    <label key={genre} htmlFor={genre} className="text-lg">
                      <input
                        type="radio"
                        name="genre"
                        id={genre}
                        className="mr-2"
                        value={genre}
                        checked={selectedGenre === genre}
                        onChange={handleGenreChange}
                      />
                      {genre.charAt(0).toUpperCase() + genre.slice(1)}
                    </label>
                  ))}
                </div>
                {otherGenre && (
                  <>
                    <label
                      className="font-semibold tracking-wider text-[17px]"
                      htmlFor="other-genre"
                    >
                      Other genre
                    </label>
                    <br />
                    <input
                      className="mt-1.5 mb-7 placeholder-gray-500 indent-3 h-10 font-light border-2 border-gray-400 rounded outline-gray-500"
                      placeholder="Enter the other genre"
                      type="text"
                      id="other-genre"
                      required
                      value={otherGenreValue}
                      onChange={(e) => setOtherGenreValue(() => e.target.value)}
                    />
                  </>
                )}
              </div>

              <button
                type="submit"
                className="mx-auto block py-2 px-4 bg-blue-600 rounded text-white active:bg-blue-700 mt-4"
              >
                {submitBtn}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(Form);
