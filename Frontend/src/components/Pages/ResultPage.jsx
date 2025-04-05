import React, { useEffect, useRef } from 'react';
import '../../css/ResultPage.css';

const ResultPage = () => {
  const resultRef = useRef(null);

  // Automatically scroll to result
  useEffect(() => {
    resultRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="result-container" ref={resultRef}>
      <div className="result-card">
        <div className="left">
          <img
            src="/Images/download.jpeg"
            alt="song-art"
            className="song-art"
          />
          <button className="play-button">▶ Play</button>
        </div>
        <div className="right">
          <h2>Sample Song Title</h2>
          <p><strong>Artist:</strong> Sample Artist</p>
          <p><strong>Release Date:</strong> Jan 1, 2024</p>
          <div className="lyrics">
            <p>
              These are the sample lyrics of the song. Let the music take you high and fill your soul with joy... Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum atque porro a ea assumenda perspiciatis alias quia. Eum labore, illum odio, excepturi, vero assumenda itaque quasi dicta doloremque rerum nihil? Temporibus aliquid corporis ea nulla cumque beatae ut rem impedit, laborum incidunt magni officia illo modi optio veniam! Rerum laudantium doloribus aut eaque assumenda blanditiis ad tempora soluta, officia ipsa nam, ab similique, voluptas pariatur unde. Mollitia eveniet obcaecati quam nobis. Veniam quae voluptates iste aperiam commodi molestiae expedita, quidem quo facilis tempora ducimus omnis fuga, temporibus sapiente ipsa aliquid modi odit necessitatibus labore quos rem consequatur. Eos cumque commodi repellendus ex enim libero nobis quaerat sequi rerum, sint deleniti provident atque neque velit non. Repellendus vero possimus delectus non voluptatum aliquam voluptate? Accusamus repellat, in vitae ad esse soluta id nulla modi voluptatibus dolores at inventore ab, laboriosam excepturi temporibus dolor alias quo! Impedit ipsam suscipit est, odit modi similique molestiae aperiam eum, et labore quisquam voluptatem dolorem corrupti? Asperiores aperiam ex voluptatibus obcaecati nemo magni a deleniti? Sit corporis explicabo modi obcaecati cumque voluptatibus temporibus iusto consequuntur doloremque? Excepturi, ullam, incidunt laudantium laborum vel libero eos veritatis eum, atque laboriosam provident asperiores natus tempora accusantium eaque consectetur error deleniti magni ut dignissimos. Debitis quae quibusdam fugiat tenetur repellendus quam rem, eum facilis voluptatibus ut quo veniam, quos aperiam soluta hic ratione enim assumenda autem explicabo laboriosam? Quibusdam, laborum quo temporibus aperiam voluptatum velit, quae alias quia blanditiis quasi aliquam, ullam quam! Deserunt maxime nam voluptas necessitatibus impedit dolorem eum quae ad esse officia doloremque nihil quidem eveniet, maiores, deleniti voluptates officiis, quibusdam fuga natus tempore enim quia doloribus minima repellendus? Odit illum harum obcaecati inventore doloribus consectetur aut, iste hic. Animi illo molestiae explicabo exercitationem, amet neque optio nam temporibus ex voluptates corporis ratione sunt minima dolorem quae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
