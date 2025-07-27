'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

type Joke = {
    setup: string;
    punchline: string;
};

export default function JokePage() {
    const [joke, setJoke] = useState<Joke | null>(null);

    useEffect(() => {
        fetch("https://official-joke-api.appspot.com/random_joke")
            .then((res) => res.json())
            .then((data) => setJoke({ setup: data.setup, punchline: data.punchline }))
            .catch((err) => console.error("Gagal fetch joke:", err));
    }, []);

    return (
        <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8">
            <nav className="mb-8">
                <Link href="/" className="text-blue-500 hover:underline">
                    ← Kembali ke Halaman Sebelumnya
                </Link>
            </nav>

            <h1 className="text-2xl font-bold mb-4">Random Joke</h1>

            {joke ? (
                <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md text-center">
                    <p className="text-lg mb-2 font-semibold">{joke.setup}</p>
                    <p className="text-gray-700">{joke.punchline}</p>
                </div>
            ) : (
                <p>Loading joke...</p>
            )}
        </div>
    );
}
