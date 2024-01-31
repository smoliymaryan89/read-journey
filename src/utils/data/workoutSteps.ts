interface WorkoutStep {
  text: string;
  span: string;
}

const workoutSteps: WorkoutStep[] = [
  {
    text: "Create a personal library:",
    span: "add the books you intend to read to it.",
  },
  {
    text: "Create your first workout:",
    span: "define a goal, choose a period, start training.",
  },
];

export default workoutSteps;
