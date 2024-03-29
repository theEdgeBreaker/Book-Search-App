// "use client";

// import React, { useState } from "react";
// import axios from "axios";
// import Image from "next/image";

// interface Book {
//   id: string;
//   volumeInfo: {
//     imageLinks?: {
//       thumbnail: string;
//     };
//     title: string;
//     authors?: string[];
//   };
// }

// export default function Page() {
//   const [book, setBook] = useState("");
//   const [result, setResult] = useState<Book[]>([]);
//   const apiKey = "AIzaSyCVSIRZejWS-42-iDZLgrpZ8R388nK7j9Q";

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const book = event.target.value;
//     setBook(book);
//   };

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     try {
//       const { data } = await axios.get(
//         `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}&maxResults=40`
//       );
//       setResult(data.items);
//       console.log(data.items);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             className="border border-gray-300 rounded-md px-4 py-2 placeholder-gray-500"
//             placeholder="Search for Books"
//             onChange={handleChange}
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Submit
//         </button>
//       </form>

//       {result.map((book) => (
//         <div key={book.id}>
//           {book.volumeInfo.imageLinks?.thumbnail && (
//             <div>
//               <Image
//                 src={book.volumeInfo.imageLinks.thumbnail}
//                 alt={book.volumeInfo.title}
//                 width={230}
//                 height={100}
//               />
//               <p>{book.volumeInfo.title}</p>
//               <ul>
//                 {book.volumeInfo.authors?.map((author, index) => (
//                   <li key={index}>{author}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// =======================================================================

// "use client";

// import React, { useState } from "react";
// import axios from "axios";
// import Image from "next/image";

// interface Book {
//   id: string;
//   volumeInfo: {
//     imageLinks?: {
//       thumbnail: string;
//     };
//     title: string;
//     authors?: string[];
//   };
// }

// export default function Page() {
//   const [bookInput, setBookInput] = useState("");
//   const [result, setResult] = useState<Book[]>([]);
//   const [error, setError] = useState<string>("");

//   const apiKey = "AIzaSyCVSIRZejWS-42-iDZLgrpZ8R388nK7j9Q";

//   const handleChange = (event: any) => {
//     setBookInput(event.target.value);
//   };

//   const handleSubmit = async (event: any) => {
//     event.preventDefault();
//     try {
//       const { data } = await axios.get(
//         `https://www.googleapis.com/books/v1/volumes?q=${bookInput}&key=${apiKey}&maxResults=40`
//       );
//       setResult(data.items);
//       setError("");
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setResult([]);
//       setError("Error fetching data. Please try again later.");
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             className="border border-gray-300 rounded-md px-4 py-2 placeholder-gray-500"
//             placeholder="Search for Books"
//             value={bookInput}
//             onChange={handleChange}
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Submit
//         </button>
//       </form>

//       {error && <p>{error}</p>}

//       {result.map((book) => (
//         <div key={book.id}>
//           {book.volumeInfo.imageLinks?.thumbnail && (
//             <div>
//               <Image
//                 src={book.volumeInfo.imageLinks.thumbnail}
//                 alt={book.volumeInfo.title}
//                 width={220}
//                 height={200}
//               />
//               <div className="flex">
//                 <span>Title -</span>
//                 <p>{book.volumeInfo.title}</p>
//               </div>
//               <ul className="flex">
//                 <span>Author-</span>
//                 {book.volumeInfo.authors?.map((author, index) => (
//                   <li key={index}>{author ?? "Unknown Author"}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// ==========================================================

// "use client";

// import React, { useState } from "react";
// import axios from "axios";
// import Image from "next/image";

// interface Book {
//   id: string;
//   volumeInfo: {
//     imageLinks?: {
//       thumbnail: string;
//     };
//     title: string;
//     authors?: string[];
//   };
// }

// export default function Page() {
//   const [bookInput, setBookInput] = useState("");
//   const [result, setResult] = useState<Book[]>([]);
//   const [error, setError] = useState<string>("");

//   const apiKey = "AIzaSyCVSIRZejWS-42-iDZLgrpZ8R388nK7j9Q";

//   const handleChange = (event: any) => {
//     setBookInput(event.target.value);
//   };

//   const handleSubmit = async (event: any) => {
//     event.preventDefault();
//     try {
//       const { data } = await axios.get(
//         `https://www.googleapis.com/books/v1/volumes?q=${bookInput}&key=${apiKey}&maxResults=40`
//       );
//       setResult(data.items);
//       console.log(data.items);
//       setError("");
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setResult([]);
//       setError("Error fetching data. Please try again later.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="container mx-auto p-8">
//         <form onSubmit={handleSubmit} className="mb-8">
//           <input
//             type="text"
//             className="border border-gray-300 rounded-md px-4 py-2 placeholder-gray-500"
//             placeholder="Search for Books"
//             value={bookInput}
//             onChange={handleChange}
//           />
//           <button
//             type="submit"
//             className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Submit
//           </button>
//         </form>

//         {error && <p className="text-red-500">{error}</p>}

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {result.map((book) => (
//             <div key={book.id} className="bg-white p-4 rounded-lg shadow">
//               {book.volumeInfo.imageLinks?.thumbnail && (
//                 <div className="mb-4">
//                   <Image
//                     src={book.volumeInfo.imageLinks.thumbnail}
//                     alt={book.volumeInfo.title}
//                     width={220}
//                     height={200}
//                   />
//                 </div>
//               )}
//               <div className="flex items-center mb-2">
//                 <span className="font-semibold">Title:</span>
//                 <p className="ml-2">{book.volumeInfo.title}</p>
//               </div>
//               <div className="flex items-center">
//                 <span className="font-semibold">Author:</span>
//                 <ul className="ml-2">
//                   {book.volumeInfo.authors?.map((author, index) => (
//                     <li key={index}>{author ?? "Unknown Author"}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// =====================================================================

// "use client";

// import React, { useState } from "react";
// import axios from "axios";
// import Image from "next/image";

// interface Book {
//   id: string;
//   volumeInfo: {
//     imageLinks?: {
//       thumbnail: string;
//     };
//     title: string;
//     authors?: string[];
//     previewLink?: string; // Add previewLink property
//   };
// }

// export default function Page() {
//   const [bookInput, setBookInput] = useState("");
//   const [result, setResult] = useState<Book[]>([]);
//   const [error, setError] = useState<string>("");

//   const apiKey = "AIzaSyCVSIRZejWS-42-iDZLgrpZ8R388nK7j9Q";

//   const handleChange = (event: any) => {
//     setBookInput(event.target.value);
//   };

//   const handleSubmit = async (event: any) => {
//     event.preventDefault();
//     try {
//       const { data } = await axios.get(
//         `https://www.googleapis.com/books/v1/volumes?q=${bookInput}&key=${apiKey}&maxResults=100`
//       );
//       setResult(data.items);
//       setError("");
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setResult([]);
//       setError("Error fetching data. Please try again later.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="container mx-auto p-8">
//         <form
//           onSubmit={handleSubmit}
//           className="mb-8 flex flex-row items-center justify-center"
//         >
//           <input
//             type="text"
//             className="border border-gray-300 rounded px-4 py-2 placeholder-gray-500 w-96"
//             placeholder="Search for Books"
//             value={bookInput}
//             onChange={handleChange}
//           />
//           <button
//             type="submit"
//             className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Submit
//           </button>
//         </form>

//         {error && <p className="text-red-500">{error}</p>}

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {result.map((book) => (
//             <div key={book.id} className="bg-white p-4 rounded-lg shadow">
//               {book.volumeInfo.imageLinks?.thumbnail && (
//                 <div className="mb-4">
//                   {book.volumeInfo.previewLink ? (
//                     <a
//                       href={book.volumeInfo.previewLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <Image
//                         src={book.volumeInfo.imageLinks.thumbnail}
//                         alt={book.volumeInfo.title}
//                         width={220}
//                         height={200}
//                       />
//                     </a>
//                   ) : (
//                     <Image
//                       src={book.volumeInfo.imageLinks.thumbnail}
//                       alt={book.volumeInfo.title}
//                       width={220}
//                       height={200}
//                     />
//                   )}
//                 </div>
//               )}
//               <div className="flex items-center mb-2">
//                 <span className="font-semibold">Title:</span>
//                 <p className="ml-2">{book.volumeInfo.title}</p>
//               </div>
//               <div className="flex items-center">
//                 <span className="font-semibold">Author:</span>
//                 <ul className="ml-2">
//                   {book.volumeInfo.authors?.map((author, index) => (
//                     <li key={index}>{author ?? "Unknown Author"}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// ===========================================================================

"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

interface Book {
  id: string;
  volumeInfo: {
    imageLinks?: {
      thumbnail: string;
    };
    title: string;
    authors?: string[];
    previewLink?: string;
  };
}

export default function Page() {
  const [bookInput, setBookInput] = useState("");
  const [result, setResult] = useState<Book[]>([]);
  const [error, setError] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const apiKey = "AIzaSyCVSIRZejWS-42-iDZLgrpZ8R388nK7j9Q";
  const maxResults = 100;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBookInput(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { data } = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${bookInput}&key=${apiKey}&maxResults=${maxResults}`
      );
      setResult(data.items);
      setError("");
      setTotalPages(Math.ceil(data.totalItems / maxResults));
      setCurrentPage(1); // Reset current page to 1 when new search is performed
    } catch (error) {
      console.error("Error fetching data:", error);
      setResult([]);
      setError("Error fetching data. Please try again later.");
    }
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  useEffect(() => {
    const fetchData = async () => {
      if (bookInput.trim() === "") {
        // Don't fetch data if bookInput is empty
        return;
      }

      try {
        const startIndex = (currentPage - 1) * maxResults;
        const { data } = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${bookInput}&key=${apiKey}&startIndex=${startIndex}&maxResults=${maxResults}`
        );
        setResult(data.items);
        setError("");
      } catch (error) {
        console.error("Error fetching data:", error);
        setResult([]);
        setError("Error fetching data. Please try again later.");
      }
    };

    fetchData();
  }, [currentPage, bookInput]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-8">
        <form
          onSubmit={handleSubmit}
          className="mb-8 flex flex-row items-center justify-center"
        >
          <input
            type="text"
            className="border border-gray-300 rounded px-4 py-2 placeholder-gray-500 w-96"
            placeholder="Search for Books"
            value={bookInput}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
        {/* Render the error message here */}
        {error && result.length === 0 && (
          <p className="text-red-500">{error}</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {result.map((book) => (
            <div key={book.id} className="bg-white p-4 rounded-lg shadow">
              {book.volumeInfo.imageLinks?.thumbnail && (
                <div className="mb-4">
                  {book.volumeInfo.previewLink ? (
                    <a
                      href={book.volumeInfo.previewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={book.volumeInfo.imageLinks.thumbnail}
                        alt={book.volumeInfo.title}
                        width={220}
                        height={200}
                      />
                    </a>
                  ) : (
                    <Image
                      src={book.volumeInfo.imageLinks.thumbnail}
                      alt={book.volumeInfo.title}
                      width={220}
                      height={200}
                    />
                  )}
                </div>
              )}
              <div className="flex items-center mb-2">
                <span className="font-semibold">Title:</span>
                <p className="ml-2">{book.volumeInfo.title}</p>
              </div>
              <div className="flex items-center">
                <span className="font-semibold">Author:</span>
                <ul className="ml-2">
                  {book.volumeInfo.authors?.map((author, index) => (
                    <li key={index}>{author ?? "Unknown Author"}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {result.length > 0 && (
          <div className="flex justify-center mt-4">
            <button
              className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
