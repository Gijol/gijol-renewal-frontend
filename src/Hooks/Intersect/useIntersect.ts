import React, { useCallback, useEffect, useState } from "react";

const defaultOption = {
  root: null,
  threshold: 0.5,
  rootMargin: "0px",
};

// useIntersect 라는 custom hook 생성

// Intersection Observer 를 사용하기 위한 "callback" 과 "option" 을 props 로 받는다.
function useIntersect(
  onIntersection: IntersectionObserverCallback,
  option: IntersectionObserverInit
) {
  // observe 가 진행되는 현재 HTMLElement target 을 useState 를 이용하여 상태를 관리한다.
  const [target, setTarget] = useState<HTMLElement | null>(null);

  // Intersection 이 이루어졌을 때, 이뤄질 작업들에 대한 설정을 해준다.
  // 단순히 intersection 이 이뤄졌을 때만 실행되도록, useCallback 을 이용하여 memory 에 함수를 저장한 것이다.
  const onIntersect = useCallback(
    (
      [entry]: Array<IntersectionObserverEntry>,
      observer: IntersectionObserver
    ) => {
      // intersecting 이 진행되는 경우에만 위에서 props 로 받은 IntersectionObserverCallback 이 실행되도록 한다.
      if (entry.isIntersecting) {
        // 해당 상황에서 props 는 Entry 지점들과 Observer 가 된다.
        onIntersection([entry], observer);
      }
    },
    []
  );

  // 여기 부분이 본 기능이다.
  // Rendering 이 완료된 이후 실행된다.
  useEffect(() => {
    // observer 를 설정한다.
    let observer: IntersectionObserver;

    // 외부에서 setTarget 으로 target 을 설정하여 null 이 아니게 된다면,
    if (target) {
      // 앞서 설정한 onIntersect 와 option 을 props 로 새롭게 설정해준다
      observer = new IntersectionObserver(onIntersect, {
        ...option,
        ...defaultOption,
      });

      // 그리고 생성한 observer 로 해당 target HTMLElement 를 observe 하기 시작한다.
      observer.observe(target);
    }
    // 만약 target 이  null 상태면 어떤 작업도 이뤄지지 않는다.
    else return;

    // clean-up 함수로 새롭게 생성된 observer 가 더이상 해당 target 을 관찰하지 않도록 한다.
    return () => observer.disconnect();

    // dependencies 들은 onIntersect useEffect 문 내에서 사용된 함수 및 변수, props 들이 변경될 때마다 실행되도록 한다.
  }, [onIntersect, target, option.root, option.rootMargin, option.threshold]);

  // 최종적으로 target 과 setter 를 반환한다.
  return [target, setTarget] as const;
}

export default useIntersect;
