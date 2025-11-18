// Button-driven client script for the Movies API
// - Uses fetch() to call /movies/, /movies/classics, /movies/genres
// - Renders results into #movies, #classics, #genres

(function () {
	const BASE = '/movies';

	async function getJSON(path) {
		const res = await fetch(path);
		if (!res.ok) {
			const txt = await res.text().catch(() => '');
			throw new Error(`${res.status} ${res.statusText} ${txt}`);
		}
		return res.json();
	}

	function showEmpty(containerId, message) {
		const el = document.getElementById(containerId);
		if (!el) return console.log(containerId + ': ' + message);
		el.innerHTML = `<p class="empty">${message}</p>`;
	}

	function renderMovies(containerId, movies) {
		const el = document.getElementById(containerId);
		if (!el) return console.log(containerId, movies);
		if (!movies || movies.length === 0) return showEmpty(containerId, 'No movies found');

		el.innerHTML = '';
		const list = document.createElement('div');
		list.style.display = 'grid';
		list.style.gap = '8px';

		for (const m of movies) {
			const card = document.createElement('div');
			card.className = 'movie-card';

			const titleRow = document.createElement('div');
			titleRow.style.display = 'flex';
			titleRow.style.justifyContent = 'space-between';
			titleRow.style.alignItems = 'baseline';

			const title = document.createElement('strong');
			title.textContent = m.title || 'Untitled';

			const year = document.createElement('span');
			year.className = 'release-year';
			year.textContent = m.releaseYear ? `(${m.releaseYear})` : '';

			titleRow.appendChild(title);
			titleRow.appendChild(year);

			const meta = document.createElement('div');
			meta.className = 'movie-meta';
			meta.innerHTML = `<span>${m.genre || 'Unknown'}</span> • <span>${m.director || 'Unknown'}</span>`;

			if (m.isClassic) {
				const badge = document.createElement('span');
				badge.className = 'classic-badge';
				badge.textContent = 'Classic';
				badge.style.marginLeft = '8px';
				titleRow.appendChild(badge);
			}

			card.appendChild(titleRow);
			card.appendChild(meta);
			list.appendChild(card);
		}

		el.appendChild(list);
	}

	function renderGenres(containerId, genres) {
		const el = document.getElementById(containerId);
		if (!el) return console.log(containerId, genres);
		if (!genres || genres.length === 0) return showEmpty(containerId, 'No genres found');
		el.innerHTML = '';

		const ul = document.createElement('ul');
		for (const g of genres) {
			const li = document.createElement('li');
			li.textContent = `${g.name}: ${g.movieCount}`;
			ul.appendChild(li);
		}
		el.appendChild(ul);
	}

	async function viewAllMovies() {
		try {
			showEmpty('movies', 'Loading...');
			const movies = await getJSON(`${BASE}/`);
			renderMovies('movies', movies);
		} catch (err) {
			console.error(err);
			showEmpty('movies', 'Error loading movies');
		}
	}

	async function viewClassicMovies() {
		try {
			showEmpty('classics', 'Loading...');
			const classics = await getJSON(`${BASE}/classics`);
			renderMovies('classics', classics);
		} catch (err) {
			console.error(err);
			showEmpty('classics', 'Error loading classic movies');
		}
	}

	async function viewGenres() {
		try {
			showEmpty('genres', 'Loading...');
			const genres = await getJSON(`${BASE}/genres`);
			renderGenres('genres', genres);
		} catch (err) {
			console.error(err);
			showEmpty('genres', 'Error loading genres');
		}
	}

	// Attach button handlers
	window.addEventListener('load', () => {
		const b1 = document.getElementById('view-movies');
		const b2 = document.getElementById('view-classics');
		const b3 = document.getElementById('view-genres');
		if (b1) b1.addEventListener('click', viewAllMovies);
		if (b2) b2.addEventListener('click', viewClassicMovies);
		if (b3) b3.addEventListener('click', viewGenres);

		// optional: load all movies by default
		// viewAllMovies();
	});

	// expose for console
	window.viewAllMovies = viewAllMovies;
	window.viewClassicMovies = viewClassicMovies;
	window.viewGenres = viewGenres;

})();

