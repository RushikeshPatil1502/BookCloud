import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

function BooksCard() {
  const [books, setBooks] = useState([]);

  // Fetch books initially
  useEffect(() => {
    const fetchAllBooks = async () => {
      const { data, error } = await supabase
        .from("books")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error loading books", error);
      } else {
        setBooks(data);
      }
    };

    fetchAllBooks();

    // Subscribe to realtime changes
    const channel = supabase
      .channel("books-realtime") // name of channel (can be anything)
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "books" },
        (payload) => {
          console.log("New book added:", payload.new);
          setBooks((prevBooks) => [payload.new, ...prevBooks]);
        }
      )
      .subscribe();

    // Cleanup on unmount
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="grid grid-cols-4 justify-between gap-6">
      {books.map((book) => (
        <div
          key={book.id}
          className="flex flex-col p-4 justify-between items-center gap-4 rounded-md shadow-md"
        >
          {book.image_url && (
            <img
              src={book.image_url}
              alt={book.name}
              className="w-full h-[340px] object-cover rounded-md"
            />
          )}
          <h1 className="font-bold text-2xl">{book.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default BooksCard;
