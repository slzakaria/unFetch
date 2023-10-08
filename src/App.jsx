import { useRef, useState, useEffect, useCallback } from "react";
import axios from "axios";
import Header from "./components/Header";

function App() {
	const searchInput = useRef("null");
	const [loading, setLoading] = useState(false);
	const [erros, setError] = useState("");
	const [images, setImages] = useState([]);
	const [totalPages, setTotalPages] = useState(0);
	const [page, setPage] = useState(1);

	const key = import.meta.env.VITE_API_KEY;

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("Form submitted with ", searchInput.current.value);

		resetSearch();
		searchInput.current.focus();
	};

	const fetchImages = useCallback(async () => {
		if (searchInput.current.value) {
			setError("");
			setLoading(true);
			try {
				const { data } = await axios.get(
					`${baseUrl}?query=${searchInput.current?.value}&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${key}`
				);
				console.log("data", data);
				setImages(data.results);
				setTotalPages(data.total_pages);
				setLoading(false);
			} catch (error) {
				setError("Something went wrong", error?.message);
				console.error(error);
				setLoading(false);
			}
		}
	}, [page]);

	const resetSearch = () => {
		setPage(1);
		fetchImages();
	};

	const baseUrl = "https://api.unsplash.com/search/photos";
	const IMAGES_PER_PAGE = 12;

	useEffect(() => {
		console.log("Fetching images from page ", page);
		fetchImages();
	}, [fetchImages]);

	return (
		<>
			<Header />
			<div className='sm:w-2/5 w-4/5 mx-auto'>
				<h1 className='text-center text-2xl mt-10 mb-6 sm:mt-28 sm:mb-12 '>
					Search for High Quality Images without Watermarks
				</h1>
				<form
					onSubmit={handleSubmit}
					className='flex flex-col sm:flex-row items-center justify-center'>
					<label htmlFor='search' className='sr-only'>
						Search
					</label>
					<div className='flex flex-col sm:flex-row w-full'>
						<input
							ref={searchInput}
							type='search'
							id='search'
							className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1F2937] focus:border-[#1F2937] block w-full p-2.5 mb-2'
							placeholder='Search ...'
							required
						/>

						<button
							type='submit'
							className='bg-[#1F2937] text-white px-4 py-2 h-10 rounded-lg sm:ml-2'>
							Search
						</button>
					</div>
				</form>
			</div>

			{loading ? (
				<p className='text-center text-2xl text-orange-600'>Loading...</p>
			) : (
				<>
					<div className='grid grid-cols-2 sm:grid-cols-4 gap-4 mx-auto px-10 w-full my-10 overflow-x-hidden overflow-y-scroll'>
						{images.map((image) => {
							return (
								<a
									key={image.id}
									href={image.links.download}
									target='_blank'
									rel='noreferrer'
									className='square-container'>
									<img
										src={image.urls.regular}
										alt={image.alt_description}
										className='square-image'
									/>
								</a>
							);
						})}
					</div>
				</>
			)}

			{erros && <p className='text-center text-2xl mx-auto text-red-600'>{erros}</p>}

			<div className='w-4/5 mx-auto text-center mt-4 mb-10'>
				{page > 1 && (
					<button
						onClick={() => setPage(page - 1)}
						className='bg-gray-300 w-fit py-1 px-4 rounded-md text-black hover:scale-105 mx-2'>
						Previous
					</button>
				)}
				{page < totalPages && (
					<button
						onClick={() => setPage(page + 1)}
						className='bg-gray-300 w-fit py-1 px-4 rounded-md text-black hover:scale-105'>
						Next
					</button>
				)}
			</div>
		</>
	);
}

export default App;
