## 🚀 1주차: 기능 구현

### P0 - 필수 기반 작업

- [x] 타입 정의 (i18n, hero, perk)
- [x] Mock 데이터 (heroes, perks)
- [x] **feat: 다국어 라우팅 설정**
  - `middleware.ts` 생성 (언어 감지 및 리다이렉트)
  - `app/[locale]` 폴더 구조 생성
  - 언어별 동적 라우팅 구현
  - 브랜치: `feat/i18n-routing`

### P1 - 핵심 페이지

- [x] **feat: 영웅 목록 페이지**

  - `/[locale]/hero` 페이지 구현
  - 영웅 카드 컴포넌트 (기본 스타일만)
  - 역할별 필터 (Tank/Damage/Support)
  - 브랜치: `feat/hero-list`

- [x] **feat: 영웅 상세 페이지**
  - `/[locale]/hero/[slug]` 페이지 구현
  - 1단계/2단계 특전 표시
  - 특전 정보 렌더링 (이름, 설명)
  - 브랜치: `feat/hero-detail`

### P1 - 핵심 기능

- [ ] **feat: 특전 선택 상태 관리**

  - Zustand store 생성 (`usePerkStore`)
  - 1단계/2단계 특전 선택 로직 (각 2개 중 1개 선택)
  - 선택/해제 액션
  - 선택된 조합 조회 함수
  - 브랜치: `feat/perk-store`

- [ ] **feat: 특전 선택 UI**
  - 특전 카드 컴포넌트
  - 선택/미선택 상태 표시
  - 선택 제한 UI (각 2개 중 1개)
  - 선택된 특전 요약 섹션
  - 브랜치: `feat/perk-ui`

### P2 - UX 개선

- [ ] **feat: 다크모드**

  - `next-themes` 설정
  - 다크모드 토글 버튼
  - CSS 변수 (light/dark)
  - Tailwind dark mode 적용
  - 브랜치: `feat/dark-mode`

- [ ] **feat: 랜딩페이지**
  - `/[locale]` 루트 페이지
  - 20초 영상 사용
  - 프로젝트 소개 텍스트
  - "시작하기" 버튼 → `/hero`
  - 브랜치: `feat/landing-page`

---

## 📦 2주차: 디자인 & 인터랙션 (r3f)

- [ ] 랜딩페이지 인터랙티브 애니메이션 (r3f)
- [ ] 특전 선택 버튼 3D 효과 (r3f)
- [ ] 색상 팔레트 설정
- [ ] 다크모드 색상 최적화
- [ ] 특전 hover 시 영상 재생

---

## 🎯 3주차: 추천 기능

- [ ] 팔콘 선수 조합 데이터 수집
- [ ] 프로 추천 페이지
- [ ] LLM 추천 기능 구현
- [ ] 사용자 입력 폼 (티어, 플레이스타일)

---

## 기타

- [ ] 공유 기능 (카드 이미지 생성)
- [ ] Contact 페이지
- [ ] 404 페이지
- [ ] SEO 최적화 (메타태그)
- [ ] 성능 최적화

---
