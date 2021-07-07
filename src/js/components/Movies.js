import React from "react";
import movies from "./Movies.css";
import ButtonMovie from "./ButtonMovie";
import MovieList from "./MovieList";
import { Container, Row, Col } from "react-grid-system";

function Movies() {
  return (
    <div>
      <div class="Movies-main">
        <div class="Movies-main-container">
          <div class="Movies-header">
            <div class="Movies-header-container">
              <div class="Movies-header-row1">
                <div class="Movies-title">
                  <h2>Sidebar</h2>
                </div>
                <div class="Movies-new-movie">
                  <ButtonMovie />
                </div>
              </div>

              <div class="Movies-header-row2">
                <div class="Movies-header-date">
                  <p>seleccionar fecha</p>
                  <p>seleccionar fecha</p>
                </div>
              </div>
            </div>
          </div>

        
              <MovieList  />

          <h2>Sidebar</h2>
          <p>This sidebar is of full height (100%) and always shown.</p>
          <p>Scroll down the page to see the result.</p>
          <p>
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
            definitiones no quo, maluisset concludaturque et eum, altera fabulas
            ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
            Eum no molestiae voluptatibus.
          </p>
          <p>
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
            definitiones no quo, maluisset concludaturque et eum, altera fabulas
            ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
            Eum no molestiae voluptatibus.
          </p>
          <p>
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
            definitiones no quo, maluisset concludaturque et eum, altera fabulas
            ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
            Eum no molestiae voluptatibus.
          </p>
          <p>
            Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
            definitiones no quo, maluisset concludaturque et eum, altera fabulas
            ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum.
            Affert laboramus repudiandae nec et. Inciderint efficiantur his ad.
            Eum no molestiae voluptatibus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Movies;
