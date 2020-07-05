import React, { useState, useRef, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import api from "./services/api";

import { GlobalStyle, Container, Input, GifsContainer } from "./styles";

interface Gif {
  id: string;
  slug: string;
  images: {
    original: {
      url: string;
    };
  };
}

const App: React.FC = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const inputRef = useRef(null);

  useEffect(() => {
    const handleGifSearch = async (): Promise<void> => {
      if (!search) {
        setGifs([]);
        return;
      }

      setLoading(true);

      try {
        const response = await api.get("", {
          params: {
            q: search,
            limit: 20,
            api_key: "HArGzReIHetTrtlWgXYthwaWsoROC8XM",
          },
        });

        setGifs(response.data.data);
      } catch {
        // fazer algo
      } finally {
        setLoading(false);
      }
    };

    handleGifSearch();
  }, [search]);

  return (
    <>
      <Container>
        <h1 hidden={!!search}>Digite algo para procurar seu gif perfeito</h1>
        <Input
          ref={inputRef}
          focused={false}
          filled={!!search}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Pesquise um gif..."
        />

        {loading && <ClipLoader color="#fff" />}

        <GifsContainer>
          {search && !loading && gifs.length === 0 && (
            <span>Nenhum gif foi encontrado</span>
          )}

          {gifs.map((gif) => (
            <LazyLoadImage
              key={gif.id}
              src={gif.images.original.url}
              alt={gif.slug}
            />
          ))}
        </GifsContainer>
      </Container>
      <GlobalStyle />
    </>
  );
};

export default App;
