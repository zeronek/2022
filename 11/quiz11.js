const url = `https://dapi.kakao.com/v2/search/web?query=#query`;
const $docs = document.querySelector('#docs');
// const $query = document.querySelector('#query');
const $searchButton = document.querySelector('#searchButton');
const $searchForm = document.querySelector('#searchForm');
const $query = document.querySelector('[name="query"]');
const $moreBtn = document.querySelector('#more-search-btn');

function getFetch(url, callback) {
  const headers = {
    Authorization: 'KakaoAK ad1eb3ae6a7731c9d17a6c0f88a5fed6',
  };

  fetch(url, { headers })
    .then((response) => response.json())
    .then((data) => callback(data));
}

function search() {
  const query = $query.value;
  const searchUrl = url.replace('#query', query);
  // url = url.replace('#query', query);

  getFetch(searchUrl, (data) => {
    const { documents } = data;
    // const documents = data.documents;
    console.log(documents);

    const docs = documents.map((document) => {
      // console.log(document);
      return document.contents;
    });

    // console.log(docs);
    $docs.innerHTML = docs.join('<hr>');
  });
}

// $searchButton.addEventListener('click', search);
// $query.addEventListener('keydown', (event) => {
//   if (event.key !== 'Enter') return;
//   // console.log(event.keyCode);
//   search();

//   // if (event.key === 'Enter') {
//   //   search();
//   // }
// });
$searchForm.addEventListener('submit', (event) => {
  search();
  event.preventDefault();
});
function successMore(data) {
  const { meta } = data;

  // 현재 마지막 페이지인지 확인
  if (meta.is_end) {
    // eslint-disable-next-line no-alert
    alert('마지막 페이지 입니다');
  } else {
    $result.innerHTML += getUl(data);
  }
}
function moreView() {
  const { value } = $text;

  if (value === '') {
    // eslint-disable-next-line no-alert
    alert('검색어를 입력하세요');

    return false;
  }

  page += 1; // 1page 증가

  fetch(`${url}?query=${value}&page=${page}`, { headers })
    .then((res) => res.json())
    .then(successMore)
    .catch(error);

  return true;
}

$btn.addEventListener('click', search);
$moreBtn.addEventListener('click', moreView);