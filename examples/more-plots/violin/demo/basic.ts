import { Violin } from '@antv/g2plot';

const data = [
  { species: 'I. setosa', x: 'PetalWidth', y: 0.2 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.4 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.5 },
  { species: 'I. setosa', x: 'SepalLength', y: 5.1 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.2 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.4 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3 },
  { species: 'I. setosa', x: 'SepalLength', y: 4.9 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.2 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.3 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.2 },
  { species: 'I. setosa', x: 'SepalLength', y: 4.7 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.2 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.5 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.1 },
  { species: 'I. setosa', x: 'SepalLength', y: 4.6 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.2 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.4 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.6 },
  { species: 'I. setosa', x: 'SepalLength', y: 5 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.4 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.7 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.9 },
  { species: 'I. setosa', x: 'SepalLength', y: 5.4 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.3 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.4 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.4 },
  { species: 'I. setosa', x: 'SepalLength', y: 4.6 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.2 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.5 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.4 },
  { species: 'I. setosa', x: 'SepalLength', y: 5 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.2 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.4 },
  { species: 'I. setosa', x: 'SepalWidth', y: 2.9 },
  { species: 'I. setosa', x: 'SepalLength', y: 4.4 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.1 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.5 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.1 },
  { species: 'I. setosa', x: 'SepalLength', y: 4.9 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.2 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.5 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.7 },
  { species: 'I. setosa', x: 'SepalLength', y: 5.4 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.2 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.6 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.4 },
  { species: 'I. setosa', x: 'SepalLength', y: 4.8 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.1 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.4 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3 },
  { species: 'I. setosa', x: 'SepalLength', y: 4.8 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.1 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.1 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3 },
  { species: 'I. setosa', x: 'SepalLength', y: 4.3 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.2 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.2 },
  { species: 'I. setosa', x: 'SepalWidth', y: 4 },
  { species: 'I. setosa', x: 'SepalLength', y: 5.8 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.4 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.5 },
  { species: 'I. setosa', x: 'SepalWidth', y: 4.4 },
  { species: 'I. setosa', x: 'SepalLength', y: 5.7 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.4 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.3 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.9 },
  { species: 'I. setosa', x: 'SepalLength', y: 5.4 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.3 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.4 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.5 },
  { species: 'I. setosa', x: 'SepalLength', y: 5.1 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.3 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.7 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.8 },
  { species: 'I. setosa', x: 'SepalLength', y: 5.7 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.3 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.5 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.8 },
  { species: 'I. setosa', x: 'SepalLength', y: 5.1 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.2 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.7 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.4 },
  { species: 'I. setosa', x: 'SepalLength', y: 5.4 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.4 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.5 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.7 },
  { species: 'I. setosa', x: 'SepalLength', y: 5.1 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.2 },
  { species: 'I. setosa', x: 'PetalLength', y: 1 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.6 },
  { species: 'I. setosa', x: 'SepalLength', y: 4.6 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.5 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.7 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.3 },
  { species: 'I. setosa', x: 'SepalLength', y: 5.1 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.2 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.9 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.4 },
  { species: 'I. setosa', x: 'SepalLength', y: 4.8 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.2 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.6 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3 },
  { species: 'I. setosa', x: 'SepalLength', y: 5 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.4 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.6 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.4 },
  { species: 'I. setosa', x: 'SepalLength', y: 5 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.2 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.5 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.5 },
  { species: 'I. setosa', x: 'SepalLength', y: 5.2 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.2 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.4 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.4 },
  { species: 'I. setosa', x: 'SepalLength', y: 5.2 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.2 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.6 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.2 },
  { species: 'I. setosa', x: 'SepalLength', y: 4.7 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.2 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.6 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.1 },
  { species: 'I. setosa', x: 'SepalLength', y: 4.8 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.4 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.5 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.4 },
  { species: 'I. setosa', x: 'SepalLength', y: 5.4 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.1 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.5 },
  { species: 'I. setosa', x: 'SepalWidth', y: 4.1 },
  { species: 'I. setosa', x: 'SepalLength', y: 5.2 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.2 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.4 },
  { species: 'I. setosa', x: 'SepalWidth', y: 4.2 },
  { species: 'I. setosa', x: 'SepalLength', y: 5.5 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.2 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.5 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.1 },
  { species: 'I. setosa', x: 'SepalLength', y: 4.9 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.2 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.2 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.2 },
  { species: 'I. setosa', x: 'SepalLength', y: 5 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.2 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.3 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.5 },
  { species: 'I. setosa', x: 'SepalLength', y: 5.5 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.1 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.4 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.6 },
  { species: 'I. setosa', x: 'SepalLength', y: 4.9 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.2 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.3 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3 },
  { species: 'I. setosa', x: 'SepalLength', y: 4.4 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.2 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.5 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.4 },
  { species: 'I. setosa', x: 'SepalLength', y: 5.1 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.3 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.3 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.5 },
  { species: 'I. setosa', x: 'SepalLength', y: 5 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.3 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.3 },
  { species: 'I. setosa', x: 'SepalWidth', y: 2.3 },
  { species: 'I. setosa', x: 'SepalLength', y: 4.5 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.2 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.3 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.2 },
  { species: 'I. setosa', x: 'SepalLength', y: 4.4 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.6 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.6 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.5 },
  { species: 'I. setosa', x: 'SepalLength', y: 5 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.4 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.9 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.8 },
  { species: 'I. setosa', x: 'SepalLength', y: 5.1 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.3 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.4 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3 },
  { species: 'I. setosa', x: 'SepalLength', y: 4.8 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.2 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.6 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.8 },
  { species: 'I. setosa', x: 'SepalLength', y: 5.1 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.2 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.4 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.2 },
  { species: 'I. setosa', x: 'SepalLength', y: 4.6 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.2 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.5 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.7 },
  { species: 'I. setosa', x: 'SepalLength', y: 5.3 },
  { species: 'I. setosa', x: 'PetalWidth', y: 0.2 },
  { species: 'I. setosa', x: 'PetalLength', y: 1.4 },
  { species: 'I. setosa', x: 'SepalWidth', y: 3.3 },
  { species: 'I. setosa', x: 'SepalLength', y: 5 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.4 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4.7 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 3.2 },
  { species: 'I. versicolor', x: 'SepalLength', y: 7 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.5 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4.5 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 3.2 },
  { species: 'I. versicolor', x: 'SepalLength', y: 6.4 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.5 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4.9 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 3.1 },
  { species: 'I. versicolor', x: 'SepalLength', y: 6.9 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.3 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 2.3 },
  { species: 'I. versicolor', x: 'SepalLength', y: 5.5 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.5 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4.6 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 2.8 },
  { species: 'I. versicolor', x: 'SepalLength', y: 6.5 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.3 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4.5 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 2.8 },
  { species: 'I. versicolor', x: 'SepalLength', y: 5.7 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.6 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4.7 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 3.3 },
  { species: 'I. versicolor', x: 'SepalLength', y: 6.3 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1 },
  { species: 'I. versicolor', x: 'PetalLength', y: 3.3 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 2.4 },
  { species: 'I. versicolor', x: 'SepalLength', y: 4.9 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.3 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4.6 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 2.9 },
  { species: 'I. versicolor', x: 'SepalLength', y: 6.6 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.4 },
  { species: 'I. versicolor', x: 'PetalLength', y: 3.9 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 2.7 },
  { species: 'I. versicolor', x: 'SepalLength', y: 5.2 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1 },
  { species: 'I. versicolor', x: 'PetalLength', y: 3.5 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 2 },
  { species: 'I. versicolor', x: 'SepalLength', y: 5 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.5 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4.2 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 3 },
  { species: 'I. versicolor', x: 'SepalLength', y: 5.9 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 2.2 },
  { species: 'I. versicolor', x: 'SepalLength', y: 6 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.4 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4.7 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 2.9 },
  { species: 'I. versicolor', x: 'SepalLength', y: 6.1 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.3 },
  { species: 'I. versicolor', x: 'PetalLength', y: 3.6 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 2.9 },
  { species: 'I. versicolor', x: 'SepalLength', y: 5.6 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.4 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4.4 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 3.1 },
  { species: 'I. versicolor', x: 'SepalLength', y: 6.7 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.5 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4.5 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 3 },
  { species: 'I. versicolor', x: 'SepalLength', y: 5.6 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4.1 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 2.7 },
  { species: 'I. versicolor', x: 'SepalLength', y: 5.8 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.5 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4.5 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 2.2 },
  { species: 'I. versicolor', x: 'SepalLength', y: 6.2 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.1 },
  { species: 'I. versicolor', x: 'PetalLength', y: 3.9 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 2.5 },
  { species: 'I. versicolor', x: 'SepalLength', y: 5.6 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.8 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4.8 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 3.2 },
  { species: 'I. versicolor', x: 'SepalLength', y: 5.9 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.3 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 2.8 },
  { species: 'I. versicolor', x: 'SepalLength', y: 6.1 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.5 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4.9 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 2.5 },
  { species: 'I. versicolor', x: 'SepalLength', y: 6.3 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.2 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4.7 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 2.8 },
  { species: 'I. versicolor', x: 'SepalLength', y: 6.1 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.3 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4.3 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 2.9 },
  { species: 'I. versicolor', x: 'SepalLength', y: 6.4 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.4 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4.4 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 3 },
  { species: 'I. versicolor', x: 'SepalLength', y: 6.6 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.4 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4.8 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 2.8 },
  { species: 'I. versicolor', x: 'SepalLength', y: 6.8 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.7 },
  { species: 'I. versicolor', x: 'PetalLength', y: 5 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 3 },
  { species: 'I. versicolor', x: 'SepalLength', y: 6.7 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.5 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4.5 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 2.9 },
  { species: 'I. versicolor', x: 'SepalLength', y: 6 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1 },
  { species: 'I. versicolor', x: 'PetalLength', y: 3.5 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 2.6 },
  { species: 'I. versicolor', x: 'SepalLength', y: 5.7 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.1 },
  { species: 'I. versicolor', x: 'PetalLength', y: 3.8 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 2.4 },
  { species: 'I. versicolor', x: 'SepalLength', y: 5.5 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1 },
  { species: 'I. versicolor', x: 'PetalLength', y: 3.7 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 2.4 },
  { species: 'I. versicolor', x: 'SepalLength', y: 5.5 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.2 },
  { species: 'I. versicolor', x: 'PetalLength', y: 3.9 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 2.7 },
  { species: 'I. versicolor', x: 'SepalLength', y: 5.8 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.6 },
  { species: 'I. versicolor', x: 'PetalLength', y: 5.1 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 2.7 },
  { species: 'I. versicolor', x: 'SepalLength', y: 6 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.5 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4.5 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 3 },
  { species: 'I. versicolor', x: 'SepalLength', y: 5.4 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.6 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4.5 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 3.4 },
  { species: 'I. versicolor', x: 'SepalLength', y: 6 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.5 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4.7 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 3.1 },
  { species: 'I. versicolor', x: 'SepalLength', y: 6.7 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.3 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4.4 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 2.3 },
  { species: 'I. versicolor', x: 'SepalLength', y: 6.3 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.3 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4.1 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 3 },
  { species: 'I. versicolor', x: 'SepalLength', y: 5.6 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.3 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 2.5 },
  { species: 'I. versicolor', x: 'SepalLength', y: 5.5 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.2 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4.4 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 2.6 },
  { species: 'I. versicolor', x: 'SepalLength', y: 5.5 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.4 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4.6 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 3 },
  { species: 'I. versicolor', x: 'SepalLength', y: 6.1 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.2 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 2.6 },
  { species: 'I. versicolor', x: 'SepalLength', y: 5.8 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1 },
  { species: 'I. versicolor', x: 'PetalLength', y: 3.3 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 2.3 },
  { species: 'I. versicolor', x: 'SepalLength', y: 5 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.3 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4.2 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 2.7 },
  { species: 'I. versicolor', x: 'SepalLength', y: 5.6 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.2 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4.2 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 3 },
  { species: 'I. versicolor', x: 'SepalLength', y: 5.7 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.3 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4.2 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 2.9 },
  { species: 'I. versicolor', x: 'SepalLength', y: 5.7 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.3 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4.3 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 2.9 },
  { species: 'I. versicolor', x: 'SepalLength', y: 6.2 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.1 },
  { species: 'I. versicolor', x: 'PetalLength', y: 3 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 2.5 },
  { species: 'I. versicolor', x: 'SepalLength', y: 5.1 },
  { species: 'I. versicolor', x: 'PetalWidth', y: 1.3 },
  { species: 'I. versicolor', x: 'PetalLength', y: 4.1 },
  { species: 'I. versicolor', x: 'SepalWidth', y: 2.8 },
  { species: 'I. versicolor', x: 'SepalLength', y: 5.7 },
  { species: 'I. virginica', x: 'PetalWidth', y: 2.5 },
  { species: 'I. virginica', x: 'PetalLength', y: 6 },
  { species: 'I. virginica', x: 'SepalWidth', y: 3.3 },
  { species: 'I. virginica', x: 'SepalLength', y: 6.3 },
  { species: 'I. virginica', x: 'PetalWidth', y: 1.9 },
  { species: 'I. virginica', x: 'PetalLength', y: 5.1 },
  { species: 'I. virginica', x: 'SepalWidth', y: 2.7 },
  { species: 'I. virginica', x: 'SepalLength', y: 5.8 },
  { species: 'I. virginica', x: 'PetalWidth', y: 2.1 },
  { species: 'I. virginica', x: 'PetalLength', y: 5.9 },
  { species: 'I. virginica', x: 'SepalWidth', y: 3 },
  { species: 'I. virginica', x: 'SepalLength', y: 7.1 },
  { species: 'I. virginica', x: 'PetalWidth', y: 1.8 },
  { species: 'I. virginica', x: 'PetalLength', y: 5.6 },
  { species: 'I. virginica', x: 'SepalWidth', y: 2.9 },
  { species: 'I. virginica', x: 'SepalLength', y: 6.3 },
  { species: 'I. virginica', x: 'PetalWidth', y: 2.2 },
  { species: 'I. virginica', x: 'PetalLength', y: 5.8 },
  { species: 'I. virginica', x: 'SepalWidth', y: 3 },
  { species: 'I. virginica', x: 'SepalLength', y: 6.5 },
  { species: 'I. virginica', x: 'PetalWidth', y: 2.1 },
  { species: 'I. virginica', x: 'PetalLength', y: 6.6 },
  { species: 'I. virginica', x: 'SepalWidth', y: 3 },
  { species: 'I. virginica', x: 'SepalLength', y: 7.6 },
  { species: 'I. virginica', x: 'PetalWidth', y: 1.7 },
  { species: 'I. virginica', x: 'PetalLength', y: 4.5 },
  { species: 'I. virginica', x: 'SepalWidth', y: 2.5 },
  { species: 'I. virginica', x: 'SepalLength', y: 4.9 },
  { species: 'I. virginica', x: 'PetalWidth', y: 1.8 },
  { species: 'I. virginica', x: 'PetalLength', y: 6.3 },
  { species: 'I. virginica', x: 'SepalWidth', y: 2.9 },
  { species: 'I. virginica', x: 'SepalLength', y: 7.3 },
  { species: 'I. virginica', x: 'PetalWidth', y: 1.8 },
  { species: 'I. virginica', x: 'PetalLength', y: 5.8 },
  { species: 'I. virginica', x: 'SepalWidth', y: 2.5 },
  { species: 'I. virginica', x: 'SepalLength', y: 6.7 },
  { species: 'I. virginica', x: 'PetalWidth', y: 2.5 },
  { species: 'I. virginica', x: 'PetalLength', y: 6.1 },
  { species: 'I. virginica', x: 'SepalWidth', y: 3.6 },
  { species: 'I. virginica', x: 'SepalLength', y: 7.2 },
  { species: 'I. virginica', x: 'PetalWidth', y: 2 },
  { species: 'I. virginica', x: 'PetalLength', y: 5.1 },
  { species: 'I. virginica', x: 'SepalWidth', y: 3.2 },
  { species: 'I. virginica', x: 'SepalLength', y: 6.5 },
  { species: 'I. virginica', x: 'PetalWidth', y: 1.9 },
  { species: 'I. virginica', x: 'PetalLength', y: 5.3 },
  { species: 'I. virginica', x: 'SepalWidth', y: 2.7 },
  { species: 'I. virginica', x: 'SepalLength', y: 6.4 },
  { species: 'I. virginica', x: 'PetalWidth', y: 2.1 },
  { species: 'I. virginica', x: 'PetalLength', y: 5.5 },
  { species: 'I. virginica', x: 'SepalWidth', y: 3 },
  { species: 'I. virginica', x: 'SepalLength', y: 6.8 },
  { species: 'I. virginica', x: 'PetalWidth', y: 2 },
  { species: 'I. virginica', x: 'PetalLength', y: 5 },
  { species: 'I. virginica', x: 'SepalWidth', y: 2.5 },
  { species: 'I. virginica', x: 'SepalLength', y: 5.7 },
  { species: 'I. virginica', x: 'PetalWidth', y: 2.4 },
  { species: 'I. virginica', x: 'PetalLength', y: 5.1 },
  { species: 'I. virginica', x: 'SepalWidth', y: 2.8 },
  { species: 'I. virginica', x: 'SepalLength', y: 5.8 },
  { species: 'I. virginica', x: 'PetalWidth', y: 2.3 },
  { species: 'I. virginica', x: 'PetalLength', y: 5.3 },
  { species: 'I. virginica', x: 'SepalWidth', y: 3.2 },
  { species: 'I. virginica', x: 'SepalLength', y: 6.4 },
  { species: 'I. virginica', x: 'PetalWidth', y: 1.8 },
  { species: 'I. virginica', x: 'PetalLength', y: 5.5 },
  { species: 'I. virginica', x: 'SepalWidth', y: 3 },
  { species: 'I. virginica', x: 'SepalLength', y: 6.5 },
  { species: 'I. virginica', x: 'PetalWidth', y: 2.2 },
  { species: 'I. virginica', x: 'PetalLength', y: 6.7 },
  { species: 'I. virginica', x: 'SepalWidth', y: 3.8 },
  { species: 'I. virginica', x: 'SepalLength', y: 7.7 },
  { species: 'I. virginica', x: 'PetalWidth', y: 2.3 },
  { species: 'I. virginica', x: 'PetalLength', y: 6.9 },
  { species: 'I. virginica', x: 'SepalWidth', y: 2.6 },
  { species: 'I. virginica', x: 'SepalLength', y: 7.7 },
  { species: 'I. virginica', x: 'PetalWidth', y: 1.5 },
  { species: 'I. virginica', x: 'PetalLength', y: 5 },
  { species: 'I. virginica', x: 'SepalWidth', y: 2.2 },
  { species: 'I. virginica', x: 'SepalLength', y: 6 },
  { species: 'I. virginica', x: 'PetalWidth', y: 2.3 },
  { species: 'I. virginica', x: 'PetalLength', y: 5.7 },
  { species: 'I. virginica', x: 'SepalWidth', y: 3.2 },
  { species: 'I. virginica', x: 'SepalLength', y: 6.9 },
  { species: 'I. virginica', x: 'PetalWidth', y: 2 },
  { species: 'I. virginica', x: 'PetalLength', y: 4.9 },
  { species: 'I. virginica', x: 'SepalWidth', y: 2.8 },
  { species: 'I. virginica', x: 'SepalLength', y: 5.6 },
  { species: 'I. virginica', x: 'PetalWidth', y: 2 },
  { species: 'I. virginica', x: 'PetalLength', y: 6.7 },
  { species: 'I. virginica', x: 'SepalWidth', y: 2.8 },
  { species: 'I. virginica', x: 'SepalLength', y: 7.7 },
  { species: 'I. virginica', x: 'PetalWidth', y: 1.8 },
  { species: 'I. virginica', x: 'PetalLength', y: 4.9 },
  { species: 'I. virginica', x: 'SepalWidth', y: 2.7 },
  { species: 'I. virginica', x: 'SepalLength', y: 6.3 },
  { species: 'I. virginica', x: 'PetalWidth', y: 2.1 },
  { species: 'I. virginica', x: 'PetalLength', y: 5.7 },
  { species: 'I. virginica', x: 'SepalWidth', y: 3.3 },
  { species: 'I. virginica', x: 'SepalLength', y: 6.7 },
  { species: 'I. virginica', x: 'PetalWidth', y: 1.8 },
  { species: 'I. virginica', x: 'PetalLength', y: 6 },
  { species: 'I. virginica', x: 'SepalWidth', y: 3.2 },
  { species: 'I. virginica', x: 'SepalLength', y: 7.2 },
  { species: 'I. virginica', x: 'PetalWidth', y: 1.8 },
  { species: 'I. virginica', x: 'PetalLength', y: 4.8 },
  { species: 'I. virginica', x: 'SepalWidth', y: 2.8 },
  { species: 'I. virginica', x: 'SepalLength', y: 6.2 },
  { species: 'I. virginica', x: 'PetalWidth', y: 1.8 },
  { species: 'I. virginica', x: 'PetalLength', y: 4.9 },
  { species: 'I. virginica', x: 'SepalWidth', y: 3 },
  { species: 'I. virginica', x: 'SepalLength', y: 6.1 },
  { species: 'I. virginica', x: 'PetalWidth', y: 2.1 },
  { species: 'I. virginica', x: 'PetalLength', y: 5.6 },
  { species: 'I. virginica', x: 'SepalWidth', y: 2.8 },
  { species: 'I. virginica', x: 'SepalLength', y: 6.4 },
  { species: 'I. virginica', x: 'PetalWidth', y: 1.6 },
  { species: 'I. virginica', x: 'PetalLength', y: 5.8 },
  { species: 'I. virginica', x: 'SepalWidth', y: 3 },
  { species: 'I. virginica', x: 'SepalLength', y: 7.2 },
  { species: 'I. virginica', x: 'PetalWidth', y: 1.9 },
  { species: 'I. virginica', x: 'PetalLength', y: 6.1 },
  { species: 'I. virginica', x: 'SepalWidth', y: 2.8 },
  { species: 'I. virginica', x: 'SepalLength', y: 7.4 },
  { species: 'I. virginica', x: 'PetalWidth', y: 2 },
  { species: 'I. virginica', x: 'PetalLength', y: 6.4 },
  { species: 'I. virginica', x: 'SepalWidth', y: 3.8 },
  { species: 'I. virginica', x: 'SepalLength', y: 7.9 },
  { species: 'I. virginica', x: 'PetalWidth', y: 2.2 },
  { species: 'I. virginica', x: 'PetalLength', y: 5.6 },
  { species: 'I. virginica', x: 'SepalWidth', y: 2.8 },
  { species: 'I. virginica', x: 'SepalLength', y: 6.4 },
  { species: 'I. virginica', x: 'PetalWidth', y: 1.5 },
  { species: 'I. virginica', x: 'PetalLength', y: 5.1 },
  { species: 'I. virginica', x: 'SepalWidth', y: 2.8 },
  { species: 'I. virginica', x: 'SepalLength', y: 6.3 },
  { species: 'I. virginica', x: 'PetalWidth', y: 1.4 },
  { species: 'I. virginica', x: 'PetalLength', y: 5.6 },
  { species: 'I. virginica', x: 'SepalWidth', y: 2.6 },
  { species: 'I. virginica', x: 'SepalLength', y: 6.1 },
  { species: 'I. virginica', x: 'PetalWidth', y: 2.3 },
  { species: 'I. virginica', x: 'PetalLength', y: 6.1 },
  { species: 'I. virginica', x: 'SepalWidth', y: 3 },
  { species: 'I. virginica', x: 'SepalLength', y: 7.7 },
  { species: 'I. virginica', x: 'PetalWidth', y: 2.4 },
  { species: 'I. virginica', x: 'PetalLength', y: 5.6 },
  { species: 'I. virginica', x: 'SepalWidth', y: 3.4 },
  { species: 'I. virginica', x: 'SepalLength', y: 6.3 },
  { species: 'I. virginica', x: 'PetalWidth', y: 1.8 },
  { species: 'I. virginica', x: 'PetalLength', y: 5.5 },
  { species: 'I. virginica', x: 'SepalWidth', y: 3.1 },
  { species: 'I. virginica', x: 'SepalLength', y: 6.4 },
  { species: 'I. virginica', x: 'PetalWidth', y: 1.8 },
  { species: 'I. virginica', x: 'PetalLength', y: 4.8 },
  { species: 'I. virginica', x: 'SepalWidth', y: 3 },
  { species: 'I. virginica', x: 'SepalLength', y: 6 },
  { species: 'I. virginica', x: 'PetalWidth', y: 2.1 },
  { species: 'I. virginica', x: 'PetalLength', y: 5.4 },
  { species: 'I. virginica', x: 'SepalWidth', y: 3.1 },
  { species: 'I. virginica', x: 'SepalLength', y: 6.9 },
  { species: 'I. virginica', x: 'PetalWidth', y: 2.4 },
  { species: 'I. virginica', x: 'PetalLength', y: 5.6 },
  { species: 'I. virginica', x: 'SepalWidth', y: 3.1 },
  { species: 'I. virginica', x: 'SepalLength', y: 6.7 },
  { species: 'I. virginica', x: 'PetalWidth', y: 2.3 },
  { species: 'I. virginica', x: 'PetalLength', y: 5.1 },
  { species: 'I. virginica', x: 'SepalWidth', y: 3.1 },
  { species: 'I. virginica', x: 'SepalLength', y: 6.9 },
  { species: 'I. virginica', x: 'PetalWidth', y: 1.9 },
  { species: 'I. virginica', x: 'PetalLength', y: 5.1 },
  { species: 'I. virginica', x: 'SepalWidth', y: 2.7 },
  { species: 'I. virginica', x: 'SepalLength', y: 5.8 },
  { species: 'I. virginica', x: 'PetalWidth', y: 2.3 },
  { species: 'I. virginica', x: 'PetalLength', y: 5.9 },
  { species: 'I. virginica', x: 'SepalWidth', y: 3.2 },
  { species: 'I. virginica', x: 'SepalLength', y: 6.8 },
  { species: 'I. virginica', x: 'PetalWidth', y: 2.5 },
  { species: 'I. virginica', x: 'PetalLength', y: 5.7 },
  { species: 'I. virginica', x: 'SepalWidth', y: 3.3 },
  { species: 'I. virginica', x: 'SepalLength', y: 6.7 },
  { species: 'I. virginica', x: 'PetalWidth', y: 2.3 },
  { species: 'I. virginica', x: 'PetalLength', y: 5.2 },
  { species: 'I. virginica', x: 'SepalWidth', y: 3 },
  { species: 'I. virginica', x: 'SepalLength', y: 6.7 },
  { species: 'I. virginica', x: 'PetalWidth', y: 1.9 },
  { species: 'I. virginica', x: 'PetalLength', y: 5 },
  { species: 'I. virginica', x: 'SepalWidth', y: 2.5 },
  { species: 'I. virginica', x: 'SepalLength', y: 6.3 },
  { species: 'I. virginica', x: 'PetalWidth', y: 2 },
  { species: 'I. virginica', x: 'PetalLength', y: 5.2 },
  { species: 'I. virginica', x: 'SepalWidth', y: 3 },
  { species: 'I. virginica', x: 'SepalLength', y: 6.5 },
  { species: 'I. virginica', x: 'PetalWidth', y: 2.3 },
  { species: 'I. virginica', x: 'PetalLength', y: 5.4 },
  { species: 'I. virginica', x: 'SepalWidth', y: 3.4 },
  { species: 'I. virginica', x: 'SepalLength', y: 6.2 },
  { species: 'I. virginica', x: 'PetalWidth', y: 1.8 },
  { species: 'I. virginica', x: 'PetalLength', y: 5.1 },
  { species: 'I. virginica', x: 'SepalWidth', y: 3 },
  { species: 'I. virginica', x: 'SepalLength', y: 5.9 },
];

const violinPlot = new Violin('container', {
  width: 400,
  height: 500,
  data: data,
  xField: 'x',
  yField: 'y',
});

violinPlot.render();
