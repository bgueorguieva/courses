function solve(worker) {
if(worker.dizziness) {
    worker.levelOfHydrated += 0.1 * worker.weight * worker.experience;
    worker.dizziness = false;
}
return worker; // ako ne e dehidratiran, moje da produlji
}

solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  );