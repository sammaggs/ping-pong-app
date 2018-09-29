 export const onLoadMakeFixtures = () => {
    const { players } = this.props;
    const shuffledWinners = [...players];
    shuffledWinners.sort(() => 0.5 - Math.random());
    const matches = [];
    while (shuffledWinners.length >= 2) {
      const pair = [shuffledWinners.pop(), shuffledWinners.pop()];
      matches.push(pair);
    }
    this.setState({
      matches: matches
    });
  }