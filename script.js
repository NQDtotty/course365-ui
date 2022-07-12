$(document).ready(function () {
    // REGION 1
    var gCoursesDB = {
        description: "This DB includes all courses in system",
        courses: [
            {
                id: 1,
                courseCode: "FE_WEB_ANGULAR_101",
                courseName: "How to easily create a website with Angular",
                price: 750,
                discountPrice: 600,
                duration: "3h 56m",
                level: "Beginner",
                coverImage: "images/courses/course-angular.jpg",
                teacherName: "Morris Mccoy",
                teacherPhoto: "images/teacher/morris_mccoy.jpg",
                isPopular: false,
                isTrending: true
            },
            {
                id: 2,
                courseCode: "BE_WEB_PYTHON_301",
                courseName: "The Python Course: build web application",
                price: 1050,
                discountPrice: 900,
                duration: "4h 30m",
                level: "Advanced",
                coverImage: "images/courses/course-python.jpg",
                teacherName: "Claire Robertson",
                teacherPhoto: "images/teacher/claire_robertson.jpg",
                isPopular: false,
                isTrending: true
            },
            {
                id: 5,
                courseCode: "FE_WEB_GRAPHQL_104",
                courseName: "GraphQL: introduction to graphQL for beginners",
                price: 850,
                discountPrice: 650,
                duration: "2h 15m",
                level: "Intermediate",
                coverImage: "images/courses/course-graphql.jpg",
                teacherName: "Ted Hawkins",
                teacherPhoto: "images/teacher/ted_hawkins.jpg",
                isPopular: true,
                isTrending: false
            },
            {
                id: 6,
                courseCode: "FE_WEB_JS_210",
                courseName: "Getting Started with JavaScript",
                price: 550,
                discountPrice: 300,
                duration: "3h 34m",
                level: "Beginner",
                coverImage: "images/courses/course-javascript.jpg",
                teacherName: "Ted Hawkins",
                teacherPhoto: "images/teacher/ted_hawkins.jpg",
                isPopular: true,
                isTrending: true
            },
            {
                id: 8,
                courseCode: "FE_WEB_CSS_111",
                courseName: "CSS: ultimate CSS course from beginner to advanced",
                price: 750,
                discountPrice: 600,
                duration: "3h 56m",
                level: "Beginner",
                coverImage: "images/courses/course-css.jpg",
                teacherName: "Juanita Bell",
                teacherPhoto: "images/teacher/juanita_bell.jpg",
                isPopular: true,
                isTrending: true
            },
            {
                id: 14,
                courseCode: "FE_WEB_WORDPRESS_111",
                courseName: "Complete Wordpress themes & plugins",
                price: 1050,
                discountPrice: 900,
                duration: "4h 30m",
                level: "Advanced",
                coverImage: "images/courses/course-wordpress.jpg",
                teacherName: "Clevaio Simon",
                teacherPhoto: "images/teacher/clevaio_simon.jpg",
                isPopular: true,
                isTrending: false
            }
        ]
    }

    // REGION 2
    onPageLoading();
    // REGION 3
    function onPageLoading() {
        getPopularCourse(gCoursesDB.courses);
        getTrendingCourse(gCoursesDB.courses);
    }
    // REGION 4
    function getPopularCourse(paramListCourses) {
        var vListArr = [];
        for (var bIndex = 0; bIndex < paramListCourses.length; bIndex++) {
            if (paramListCourses[bIndex].isPopular) {
                vListArr.push(paramListCourses[bIndex]);
            }
        }
        loadDataToPopularCourses(vListArr);
    }

    function getTrendingCourse(paramListCourses) {
        var vListArr = [];
        for (var bIndex = 0; bIndex < paramListCourses.length; bIndex++) {
            if (paramListCourses[bIndex].isTrending) {
                vListArr.push(paramListCourses[bIndex]);
            }
        }
        loadDataToTrendingCourses(vListArr);
    }

    function loadDataToPopularCourses(paramListCourses) {
        var vCardPopularCourses = $("#card-popular-courses");
        for (var bIndex = 0; bIndex < paramListCourses.length; bIndex++) {
            var bNewCard = $("<div>").addClass("card").appendTo(vCardPopularCourses);
            $("<img>").addClass("card-img-top").attr("src", paramListCourses[bIndex].coverImage).appendTo(bNewCard);

            // Card Body
            var bCardBody = $("<div>").addClass("card-body").appendTo(bNewCard);
            $("<h4>", {
                html: paramListCourses[bIndex].courseName,
            }).addClass("card-title").appendTo(bCardBody);
            var bIconClockDuration = $("<i>").addClass("fas fa-clock").appendTo(
                $("<p>", {
                    text: paramListCourses[bIndex].duration,
                }).addClass("card-text").appendTo(bCardBody)
            );
            var bPrice = $("<p>").appendTo(bCardBody);
            var bDiscountPrice = $("<b>", {
                text: "$" + paramListCourses[bIndex].discountPrice + " "
            }).appendTo(bPrice);
            var bRealPrice = $("<del>", {
                text: "$" + paramListCourses[bIndex].price
            }).appendTo(bPrice);

            // Card Footer
            var bCartFooter = $("<div>").addClass("card-footer").appendTo(bNewCard);
            $("<img>").addClass("rounded-circle").attr({
                src: paramListCourses[bIndex].teacherPhoto,
                width: "25px"
            }).appendTo(bCartFooter);
            $("<span>", {
                text: paramListCourses[bIndex].teacherName
            }).appendTo(bCartFooter);
            $("<i>").addClass("fas fa-bookmark ml-4").appendTo(bCartFooter);
        }
    }

    function loadDataToTrendingCourses(paramListCourses) {
        var vCardTrendingCourses = $("#card-trending-courses");
        for (var bIndex = 0; bIndex < paramListCourses.length; bIndex++) {
            var bNewCard = $("<div>").addClass("card").appendTo(vCardTrendingCourses);
            $("<img>").addClass("card-img-top").attr("src", paramListCourses[bIndex].coverImage).appendTo(bNewCard);

            // Card Body
            var bCardBody = $("<div>").addClass("card-body").appendTo(bNewCard);
            $("<h4>", {
                html: paramListCourses[bIndex].courseName,
            }).addClass("card-title").appendTo(bCardBody);
            var bIconClockDuration = $("<i>").addClass("fas fa-clock").appendTo(
                $("<p>", {
                    text: paramListCourses[bIndex].duration,
                }).addClass("card-text").appendTo(bCardBody)
            );
            var bPrice = $("<p>").appendTo(bCardBody);
            var bDiscountPrice = $("<b>", {
                text: "$" + paramListCourses[bIndex].discountPrice + " "
            }).appendTo(bPrice);
            var bRealPrice = $("<del>", {
                text: "$" + paramListCourses[bIndex].price
            }).appendTo(bPrice);

            // Card Footer
            var bCartFooter = $("<div>").addClass("card-footer").appendTo(bNewCard);
            $("<img>").addClass("rounded-circle").attr({
                src: paramListCourses[bIndex].teacherPhoto,
                width: "25px"
            }).appendTo(bCartFooter);
            $("<span>", {
                text: paramListCourses[bIndex].teacherName
            }).appendTo(bCartFooter);
            $("<i>").addClass("fas fa-bookmark ml-4").appendTo(bCartFooter);
        }
    }
});