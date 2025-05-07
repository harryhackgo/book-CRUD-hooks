import React from "react";

const Card = ({ books, setBooks, setEdit }) => {
  const handleEdit = (i) => {
    setEdit({ ...books[i], id: i });
  };

  return (
    <>
      <section className="mt-4">
        <div className="container flex items-center justify-start flex-wrap gap-8 mx-auto">
          {books.map((book, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-2xl mb-4 flex flex-col items-center text-center bg-gray-200 overflow-hidden"
            >
              <div
                className={`w-full h-56 bg-[url(${book.url})] bg-cover bg-center relative`}
              >
                <div className="absolute top-1.5 right-1.5 p-1.5 text-white flex gap-2 ">
                  <button
                    className="bg-blue-500 rounded px-1.5 py-1 cursor-pointer"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 rounded px-1.5 py-1 cursor-pointer"
                    onClick={() => {
                      setBooks(() => books.filter((_, i) => i !== index));
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <h2 className="text-2xl pt-2">{book.title}</h2>
              <span className="pb-2.5">by {book.author}</span>

              <p className="p-2.5 flex-1 mx-5">{book.description}</p>
              <div className="bg-amber-700 text-white flex justify-around mt-3 w-full">
                <div className="flex-1/3">
                  ${book.price} <br /> PRICE
                </div>
                <div className="flex-1/3 border-r-2 border-l-2">
                  {book.inStock} <br /> IN STOCK
                </div>
                <div className="flex-1/3">
                  {book.genre.toUpperCase()} <br /> GENRE
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default React.memo(Card);
