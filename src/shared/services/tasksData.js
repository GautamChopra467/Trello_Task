const tasksInitialData = {
  tasks: {
    1: {
      id: 1,
      content: "Build a Better Burrito: 7 Layers to Success",
      image: "",
      user: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
      date: "Oct 5",
      sharedCount: 3,
    },
    2: {
      id: 2,
      content: "Nacho Ordinary Birthday",
      image: "",
      user: "https://petapixel.com/assets/uploads/2019/02/download-1-800x800.jpeg",
      date: "Jan 25",
      sharedCount: 0,
    },
    3: {
      id: 3,
      content: "Drone Delivery Services",
      image:
        "https://img.freepik.com/premium-vector/drone-flying-air-quadrocopter-cartoon-isolated-logo-icon_48369-9994.jpg?w=740",
      user: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      date: "Dec 25",
      sharedCount: 0,
    },
    4: {
      id: 4,
      content: "Superbowl Ad - Super Salad Bowls",
      image: "",
      user: "https://www.seekpng.com/png/detail/57-576498_man-face-png-happy-people-face-png.png",
      date: "Jul 2",
      sharedCount: 0,
    },
    5: {
      id: 5,
      content: "The Taco Truck World Tour",
      image: "",
      user: "https://www.seekpng.com/png/detail/57-576498_man-face-png-happy-people-face-png.png",
      date: "Jul 5",
      sharedCount: 2,
    },
    6: {
      id: 6,
      content: "Awesome Sauce for a Taco",
      image:
        "https://img.freepik.com/premium-photo/taco-2d-cartoon-vector-illustration-white-background-high_889056-28508.jpg",
      user: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
      date: "Oct 5",
      sharedCount: 0,
    },
    7: {
      id: 7,
      content: "#NoFiller Instagram Campaign",
      image: "",
      user: "https://petapixel.com/assets/uploads/2019/02/download-1-800x800.jpeg",
      date: "Jun 5",
      sharedCount: 5,
    },
    8: {
      id: 8,
      content: "Global franchise Oppurtunities",
      image: "",
      user: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      date: "Dec 20",
      sharedCount: 0,
    },
    9: {
      id: 9,
      content: "Focus Group: Ind vs Pak",
      image: "",
      user: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
      date: "Feb 15",
      sharedCount: 3,
    },
    10: {
      id: 10,
      content: "New Swag, Socks, Dress, Shoes",
      image: "",
      user: "https://petapixel.com/assets/uploads/2019/02/download-1-800x800.jpeg",
      date: "Jan 25",
      sharedCount: 0,
    },
    11: {
      id: 11,
      content: "Update Yelp Listning",
      image:
        "",
      user: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      date: "Dec 25",
      sharedCount: 0,
    },
    12: {
      id: 12,
      content: "Grand Opening Celebration",
      image: "https://png.pngtree.com/background/20210714/original/pngtree-3d-papercut-happy-birthday-background-with-happy-birthday-greeting-text-picture-image_1201286.jpg",
      user: "https://www.seekpng.com/png/detail/57-576498_man-face-png-happy-people-face-png.png",
      date: "Jul 2",
      sharedCount: 0,
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      taskIds: [1, 2, 3, 4],
    },
    "column-2": {
      id: "column-2",
      title: "Doing",
      taskIds: [5, 6, 7],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: [ 11, 12],
    },
    "column-4": {
      id: "column-4",
      title: "Resources",
      taskIds: [9, 12],
    },
  },
  columnOrder: ["column-4", "column-1", "column-2", "column-3"],
};

export { tasksInitialData };
