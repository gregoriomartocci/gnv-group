const Main = () => {
  return (
    <MainSection>
      <MainContainer>
        {slides.map((slides, index) => {
          <MainSlide key={index}>
            <MainSlider>
              <MainImage />

              <MainContent>
                <h1>{slide.tilte}</h1>
              </MainContent>
            </MainSlider>
          </MainSlide>;
        })}
      </MainContainer>
    </MainSection>
  );
};

export default Main;
